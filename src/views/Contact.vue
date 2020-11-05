<template lang='pug'>
  .contact
    h1 Contact
    .contactList
      a(href='https://github.com/ZhaoHouLin' target='_blank')
        i.fab.fa-github-square
      a(href='https://codepen.io/rodes' target='_blank')
        i.fab.fa-codepen
      a(href='https://www.facebook.com/ZhaoHouLin/' target='_blank')
        i.fab.fa-facebook-square
    h3 rodes5292@gmail.com

</template>

<style lang="stylus" scoped>
@import '../css/style.styl'
.contact
  z-index 2
  size(50%,auto)
  position absolute
  top 50%
  left 20%
  transform translate(0%,-50%)
  background-color transparent
  padding 16px
  padding-left 32px
  h1
    color #eee
    text-shadow 4px 4px 16px rgba(0,0,0,1)
  h3
    color #eee
    margin-top 16px

  .contactList
    i
      size(auto,auto)
      margin-top 32px
      margin-right 16px
      font-size 48px
      color #eee
      text-shadow 8px 8px 16px rgba(0,0,0,1)
  
@media screen and (min-width 280px)
  .contact
    h3
      -webkit-writing-mode vertical-lr
      writing-mode vertical-lr
      margin-top 16px
@media screen and (min-width 1024px)
  .contact
    h3
      margin-top 16px
      text-shadow 4px 4px 16px rgba(0,0,0,1)
      -webkit-writing-mode initial
      writing-mode initial 
      font-size 24px
</style>