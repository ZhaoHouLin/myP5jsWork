<template lang='pug'>
.pagesChecked
  label.circleChecked(v-for=' circle in $store.state.iframeSrc')
    input(type="radio" :value='circle' name="r" v-model='isChecked')
    div

</template>

<script>

export default {
  data() {
    return {
      isChecked: 1,
      // checkedValue:[1,2,3,4]
    }
  },
  methods: {
   
  },
  computed: {

  }
}
</script>

<style lang='stylus' scoped>
@import '../css/style.styl'

.pagesChecked
  position fixed
  right 0
  top 50%
  transform translate(0,-50%)
  .circleChecked
    z-index 3
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
      z-index 3
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