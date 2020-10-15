<template lang='pug'>
.header
  .title
    h1 ZZ p5js work
    i(@click='listIsShow' :class="['menu','fas',{'fa-bars':!isOpen},{'fa-times':isOpen}]" )
    ul.nav()
      li(v-for='list in menu' :key='list')
        a(:href='"#"+list') {{list}} 
  ul.box(:style='{height:BoxHeight}')
    li(v-for='list in menu' :key='list')
      a(:href='"#"+list') {{list}}
    
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'
.header
  size(100%,auto)
  flexCenter(space-between,center,column)
  .title
    size(100%,auto)
    border-bottom 1px solid #000
    flexCenter(space-between,center)
    padding 16px 32px
    i 
      cursor pointer
      transition 0.5s
    // .nav
  .box
    display block
    size(100%,0)
    transition height 0.4s
    overflow hidden
    
    li
      size(100%,56px)
      background-color transparent
      flexCenter()
      align-items center
      border-bottom 1px solid #000
      a
        flexCenter()
        size(100%,56px)
    li:hover
      background-color #222
      a
        color #fff
  .nav
    display none


@media screen and (min-width 1024px)
  h1,i
    font-size xl
  i 
    display none
  .header
    .title
      size(100%,120px)
      position relative
      .nav
        position absolute
        right 0
        size(50%,100%)
        flexCenter(space-around,center)
        font-size 1rem
        li
          size(100%,100%)
          flexCenter()
          padding 16px
        li:hover
          background-color #222
          a
            color #fff
    .box
      display none
    
</style>

<script>
export default {
  data() {
    return {
      menu: [
        'about',
        'openprocessing',
        'contact'
      ],
      isOpen: false
    }
  },
  methods: {
    listIsShow() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    BoxHeight() {
      return this.isOpen ? `${this.menu.length*56}px` : '0px'
    }
  }
}
</script>