<template>
  <section
      ref="lazy"
      class="partner">
    <div class="inner"></div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$lazyLoad(this.$refs.lazy)
  }
}
</script>

<style scoped lang="scss">
  section {
    background-color: #F43242;
    .inner {
      height: 500px;
    }
  }
</style>