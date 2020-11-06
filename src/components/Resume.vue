<template lang='pug'>
.resume(:class='{"isOpen": isOpen}')
  i(@click='open' 
  :class='["fas",{"fa-caret-right":!isOpen},{"isOpen": isOpen},{"fa-caret-left" :isOpen}]')
  .content
    .experience
      .title
        h2 工作經驗 Experience
      .intro
        h2 藍新資訊有限公司
        h3 系統設備駐點維護人員
        p 疾病管制署駐點電腦相關維護，
        |電腦故障排除，
        |解決系統相關問題。
      .timeline
        h3 2017-03 ~ 在職中
    .education
      .title
        h2 學歷 Education
      .intro
        h2 國立台北科技大學
        h3 光電工程系
      .timeline
        h3 2008-09 ~ 2012-06

</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen
      console.log('hi');
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../css/style.styl'
.resume
  position absolute
  flexCenter()
  .content
    display none
  
@media screen and (min-width 1280px)
  .resume
    position absolute
    z-index 3
    font-family initial
    size(21%,calc(100vh - 84px))
    margin-top 84px
    background-color #3dabff
    transition width 0.5s
    flexCenter()

    i 
      position absolute
      right 0
      size(auto,auto)
      color #fff

    .content
      flexCenter(center,space-between)
      size(50%,auto)
      .experience,.education
        color #fff
        flexCenter(flex-start,,column)
        size(auto,auto)
        .title,.intro,.timeline
          flexCenter(flex-start,flex-start,column)
          size(auto,auto)
          margin-bottom 16px
        .title
          flex 1
        .intro
          flex-grow 2
 
      .experience
        margin-right 20%
      .education
        word-wrap normal
  .isOpen
    transition width 0.5s
    width 100%
    
</style>