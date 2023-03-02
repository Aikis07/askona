<template>
  <div class="wrapper relative">
    <div class="header">
      <base-header @showBasket="isBasket = $event" />
    </div>
    <div class="nav">
      <base-nav />
    </div>
    <div class="swiper">

    </div>
    <div class="basket absolute right-0 top-0">
      <base-basket v-if="isBasket" @closeBasket="isBasket = $event" />
    </div>
    <nuxt />
  </div>
</template>

<script>

export default {
  data() {
    return {
      isBasket: false
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
