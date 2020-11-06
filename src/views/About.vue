<template lang='pug'>
  .about
    h1 About me
    h3 我的名字叫林炤后，可以叫我ZZ，別人眼中的我是個悶騷、講話直接的人，對於互動特效網頁深感興趣，所以持續學習前端網路程式相關課程，如html、css、Javascript、P5js、Vue等。
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'
.about
  z-index 2
  size(50%,auto)
  position absolute
  top 50%
  left 20%
  transform translate(0%,-50%)
  background-color transparent
  padding 16px
  padding-left 32px
  h1,h3 
    color #eee
    text-shadow 4px 4px 16px rgba(0,0,0,1)

  h3
    margin-top 16px

@media screen and (min-width 1280px)
  .about
    h3
      font-size 24px

</style>