<template>
  <div>
    <button @click="addProductToBasket(product)" class="add bg-promo-color px-5 py-2 text-white mt-3">Добавить в
      корзину</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

  export default {
    props: {
      product: {
        type: Object,
      },
    },
    methods: {
      ...mapMutations(['addProductToBasket'])
    },
  }
</script>

<style lang="scss" scoped>

</style>