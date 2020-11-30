<template lang='pug'>
.rightSection
  iframe(:src='$store.state.resultSrc')  
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang='stylus'>
@import '../css/style.styl'

.rightSection
  background-color #222
  size(80%)
  iframe
    size()
    border none

@media screen and (min-width 1280px)
  .rightSection
    size(80%)
    iframe
      size()
      border none   
      
</style>