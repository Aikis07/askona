<template>
  <div class="product__wrapper flex justify-center items-center">
    <component class="product__img" :is="product" />
  </div>
</template>

<script>
import Bed from '@/assets/img/products-img/bed.svg'
import Mattress from '@/assets/img/products-img/mat.svg'
import BedOne from '@/assets/img/products-img/bed-1.svg'


export default {
  components: {
    Bed,
    Mattress,
    BedOne,
  },
  props: {
    product: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>