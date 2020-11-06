<template lang='pug'>
.pagesChecked
  label.circleChecked(v-for=' (circle,key,idx) in $store.state.iframeSrc')
    input(type="radio" :value='idx' name="r" v-model='isChecked' @click='changePage(key)')
    div

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isChecked: 0,
    }
  },
  methods: {
    ...mapActions(['pageCommit']),
    changePage(key) {
      this.pageCommit(key)
    }
  },
  computed: {

  }
}
</script>

<style lang='stylus' scoped>
@import '../css/style.styl'

.pagesChecked
  z-index 2
  position fixed
  right 0
  top 50%
  transform translate(0,-50%)
  .circleChecked
    flexCenter()
    margin-right 16px
  .circleChecked input[type="radio"]
    visibility hidden
    cursor pointer
    margin 16px
    & + div
      cursor pointer
      flexCenter()
      position absolute
      border 1px solid #000
      &:before,&:after
        position absolute
        content ''
        border-radius 100%
      &:before
        background-color #fff
        size(1rem,1rem)
      &:after
        size(2rem,2rem)
        border 2px solid #fff
        background-color transparent
        transform scale(0)
        transition transform .3s ease

    &:checked + div
      &:before
        size(1rem,1rem)
      &:after
        transition transform .3s ease
        transform scale(1.1)

@media screen and (min-width 1280px)
  .pagesChecked
    position fixed
    right 0
    top 50%
    transform translate(0,-50%)
    .circleChecked
      flexCenter()
      margin-right 16px
    .circleChecked input[type="radio"]
      visibility hidden
      cursor pointer
      margin 16px
      & + div
        cursor pointer
        flexCenter()
        position absolute
        border 1px solid #000
        &:before,&:after
          position absolute
          content ''
          border-radius 100%
        &:before
          background-color #fff
          size(1rem,1rem)
        &:after
          size(2rem,2rem)
          border 2px solid #fff
          background-color transparent
          transform scale(0)
          transition transform .3s ease

      &:checked + div
        &:before
          size(1rem,1rem)
        &:after
          transition transform .3s ease
          transform scale(1.1)
</style>