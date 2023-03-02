<template>
  <div class="favourites mx-24 flex justify-center flex-col items-center mt-7">
    <h2 class="favourites__title text-4xl">Хиты продаж</h2>
    <div class="favorites__list flex gap-8 mt-6 flex-wrap">
      <div v-for="product of products" :key="product.event" class="favorites__item border rounded w-1/4">
        <product-icon :product="product.event" />
        <div class="favourites__description mx-4 py-4 border-t">
          <h2 class="favourites__name font-semibold">{{ product.name }}</h2>
          <div class="product__inner flex items-end mt-3">
            <p class="product__price">от</p>
            <p class="product__price ml-1 text-promo-color text-xl">{{ product.price }}</p>
          </div>
          <button @click="addProductToBasket(product)" class="add bg-promo-color px-5 py-2 text-white mt-3">Добавить в
            корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ProductIcon from './ProductIcon.vue';

export default {
  components: {
    ProductIcon,
  },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    ...mapMutations(['addProductToBasket'])
  },
  mounted() {
    this.$store.dispatch('getProducts')
  },
}
</script>

<style lang="scss" scoped>
.favorites__item {
  max-width: calc((100% - 96px)/4);
}
</style>