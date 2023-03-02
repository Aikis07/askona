<template>
  <div class="wrapper relative">
    <div class="header">
      <header-view :basket="basket" @showBasket="isBasket = $event" />
    </div>
    <div class="nav">
      <nav-view :categories="categories"/>
    </div>
    <div class="basket absolute right-0 top-0">
      <basket-view v-if="isBasket" :basket="basket" @closeBasket="isBasket = $event"/>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      isBasket: false,
      productId: null
    }
  },
  computed: {
    ...mapState(['categories', 'basket']),
  },
  mounted () {
    this.$store.dispatch('getCategories')
  },
};
</script>

<style lang="scss" scoped>

</style>
