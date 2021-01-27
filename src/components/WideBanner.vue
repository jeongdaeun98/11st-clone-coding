<template>
  <section
      ref="lazy"
      class="wide-banner">
    <div class="inner"></div>
  </section>
</template>

<script>
  export default {
    mounted() {
      this.$lazyLoad(this.$refs.lazy)
    }
  }
</script>

<style scoped lang="scss">
section {
  background-color: #FBB93F;
  .inner {
    height: 220px;
  }
}
</style>