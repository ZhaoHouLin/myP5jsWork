<template lang='pug'>
.background I am background
  iframe(:src='src')
</template>

<script>
export default {
  data() {
    return {
      src: 'http://localhost:8080/work/DigiCode/index.html'
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
  background-color #0f0
  z-index -1

  iframe
    size()
    position absolute
    border none
</style>