<template>
  <section class="todays-chance">
    <div
        ref="lazy"
        class="inner">
      <h2>오늘의 찬스</h2>
    </div>
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
    .inner {
      height: 485px;
      padding: 50px 0 0;
    }
  }
</style>