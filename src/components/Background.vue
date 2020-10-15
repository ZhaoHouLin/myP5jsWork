<template lang='pug'>
.background I am background
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '../css/style.styl'

.background
  position absolute
  size()
  flexCenter()
  background-color #0f0
  z-index -1
</style>