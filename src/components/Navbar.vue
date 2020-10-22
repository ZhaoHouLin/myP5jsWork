<template lang='pug'>
.header
  .title
    h1 ZZ p5js work
    i(@click='listIsShow' :class="['menu','fas',{'fa-bars':!isOpen},{'fa-times':isOpen}]" )
    ul.nav
      a(v-for='list in menu' :key='list.name' :href='list.url' ,:target='list.open' ) {{list.name}} 

  ul.box(:style='{height:BoxHeight}')
    a(v-for='list in menu' :key='list.name' :href='list.url' ,:target='list.open') {{list.name}}
    
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'
.header
  z-index 1
  position fixed
  size(100%,auto)
  flexCenter(space-between,center,column)
  .title
    color #fff
    size(100%,auto)
    border-bottom 1px solid #fff
    flexCenter(space-between,center)
    padding 16px 32px
    i 
      cursor pointer
      transition 0.5s
    .nav
      display none

  .box
    display block
    size(100%,0)
    transition height 0.4s
    overflow hidden
    background-color rgba(0, 131, 255,0.7)
    a
      color #fff
      size(100%,56px)
      background-color transparent
      flexCenter()
      align-items center
      border-top 1px solid #fff
      
    a:hover
      color #222
      background-color #0083ff
    a:focus
      background-color #fff
      color #0083ff


@media screen and (min-width 1280px)
  h1,i
    font-size md
  i 
    display none
  .header
    z-index 1
    .title
      size(100%,84px)
      position relative
      .nav
        position absolute
        right 0
        size(50%,100%)
        flexCenter()
        font-size 1rem
        a
          color #fff
          padding 0px 16px
          size(100%,100%)
          flexCenter()
          text-shadow 4px 4px 16px rgba(0,0,0,1)
          transition 0.5s
        a:hover
          background-color #0083ff
          text-shadow none
          
        a:focus
          background-color #fff
          color #222
          
    .box
      display none
    
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'about',
          url: '#/about',
        },
        {
          name: 'openprocessing',
          url: 'https://www.openprocessing.org/user/231689/',
          open: '_blank'
        },
        {
          name: 'contact',
          url: '#/contact',  
        },
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