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
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'
.contact
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
    // font-size md
  .contactList
    i
      size(auto,auto)
      margin-top 16px
      margin-right 16px
      font-size 48px
      color #eee

</style>