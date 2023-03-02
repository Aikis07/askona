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
          <add-basket :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductIcon from './BaseIcons/ProductIcon.vue';
import AddBasket from '@/components/UI/AddBasket.vue'

export default {
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    ProductIcon,
    AddBasket,
  },
}
</script>

<style lang="scss" scoped>
.favorites__item {
  max-width: calc((100% - 96px)/4);
}
</style>