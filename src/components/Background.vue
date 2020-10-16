<template lang='pug'>
.background 
  LeftSection
  RightSection

</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../css/style.styl'

.background
  position absolute
  size()
  flexCenter()
  background-color #0083ff
  z-index -1


@media screen and (min-width 1280px)
  .background
    position absolute
    size()
    flexCenter()
    background-color #0083ff
    z-index -1
</style>