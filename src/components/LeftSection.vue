<template lang='pug'>
.leftSection
  h1 Hi I am Raiden
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '../css/style.styl'
.leftSection
  z-index 4
  flexCenter()
  size(20%)
  background-color #0083ff
  h1 
    font-family '微軟正黑體'
    -webkit-writing-mode vertical-lr
    writing-mode vertical-lr 
    text-align center
    font-size 3rem
    color #fff

@media screen and (min-width 1280px)
  .leftSection
    z-index 4
    flexCenter()
    size(20%)
    h1 
      -webkit-writing-mode initial
      writing-mode initial 
      text-align center
      font-size xl
      line-height initial
      color #fff

</style>