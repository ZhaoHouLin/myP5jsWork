<template lang='pug'>
  #app
    Navbar
    Background
    Resume
    PagesChecked
    transition(name='page' mode='out-in')
      router-view
</template>

<style lang="stylus" scoped>
@import './css/style.styl'

#app
  size()
  padding 0
  margin 0

.page-enter-active,.page-leave-active
  transition 0.5s
.page-enter,.page-leave-to
  opacity 0
  
</style>

<script>
export default {
  data() {
    return {
     
    }
  },
  methods: {
   
  },
  computed: {
   
  }
}
</script>