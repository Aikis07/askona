<template>
  <div class="main">
    <favourites-view :products="products" />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped></style>