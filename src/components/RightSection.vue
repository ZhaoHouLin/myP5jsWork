<template lang='pug'>
.rightSection
  iframe.DigiCode(:src='DigiCodeSrc')  
</template>

<script>
export default {
  data() {
    return {
      DigiCodeSrc: 'http://localhost:8080/work/DigiCode/index.html'
    }
  }
}
</script>

<style lang='stylus'>
@import '../css/style.styl'

.rightSection
  size(80%)
  .DigiCode
    size()
    border none

@media screen and (min-width 1280px)
  .rightSection
    size(80%)
    .DigiCode
      size()
      border none    
</style>