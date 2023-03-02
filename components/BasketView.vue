<template>
  <div class="basket w-screen h-screen bg-black/30 relative">
    <div class="basket__wrapper w-649 h-screen bg-white absolute top-0 right-0">
      <div class="basket__title flex items-center justify-between p-8 border-b">
        <h2 class="basket__title text-3xl">В корзине {{ basket.length }} товара</h2>
        <cross @click="onClickClose" class="basket__close cursor-pointer" />
      </div>
      <div v-for="product in basket" :key="product.event" class="product__list">
        <div class="product__item flex items-center mx-8 justify-between border-b py-5">
          <product-icon :product="product.event" class="product__img w-28 h-20" />
          <div class="product__desc flex flex-col gap-3">
            <h2 class="product__name font-semibold">{{ product.name }}</h2>
            <div class="product__actions flex items-center gap-7">
              <div class="product__comparison flex items-center">
                <comparison />
                <h2 class="product__action ml-2">Добавить к сравнению</h2>
              </div>
              <div class="product__delete flex items-center">
                <white-cross />
                <h2 @click="removeProduct(product.id)" class="product__action ml-2 cursor-pointer">Удалить</h2>
              </div>
            </div>
          </div>
          <div class="product__inner flex flex-col justify-center items-center gap-3">
            <h2 class="product__price text-promo-color font-semibold">{{ productPrice(product.price) }}</h2>
            <div class="product__values flex items-center justify-center gap-4">
              <h2 @click="onCLickLess" class="product__less text-2xl text-promo-color cursor-pointer">-</h2>
              <input v-model="checkProductValue"
                class="product__input outline-none w-9 h-6 border font-semibold text-center" type="number">
              <h2 @click="onClickMore" class="product__more text-2xl text-promo-color cursor-pointer">+</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="basket__total mx-8 flex justify-between text-xl mt-5">
        <h2 class="basket__text">Итого:</h2>
        <h2 class="basket__sum text-promo-color">{{ totalSum }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Cross from '@/assets/img/cross.svg'
import ProductIcon from '~/components/BaseIcons/ProductIcon.vue';
import Comparison from '@/assets/img/Comparison-icon.svg'
import WhiteCross from '@/assets/img/white-cross.svg'

export default {
  components: {
    Cross,
    ProductIcon,
    Comparison,
    WhiteCross,
  },
  props: {
    basket: {
      type: Array,
    },
  },
  data() {
    return {
      productValue: 1,
    }
  },
  computed: {
    checkProductValue() {
      if (this.productValue < 1) {
        this.productValue = 1;
      }
      return this.productValue;
    },
    totalSum() {
      return this.basket.reduce((acc, val) => acc + val.price, 0)
    }
  },
  methods: {
    ...mapMutations(['removeProduct']),
    onCLickLess() {
      this.productValue--
    },
    onClickMore() {
      this.productValue++
    },
    onClickClose() {
      this.$emit('closeBasket', false)
    },
    productPrice(price) {
      return price * this.productValue
    }
  },
}
</script>

<style lang="scss" scoped></style>