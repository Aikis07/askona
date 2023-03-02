<template>
  <div class="nav mx-24 flex items-center justify-between mt-14 relative">
    <div class="previous w-8 h-8 border flex justify-center items-center rounded-full absolute -left-11">
      <arrow class="arrow"/>
    </div>
    <div v-for="category of categories" :key="category.id" class="nav__list">
      <div class="nav__item cursor-pointer flex flex-col items-center justify-center">
        <nav-icons class="nav__icons" :category="category.event" />
        <h2 class="nav__title">{{category.name}}</h2>
      </div>
    </div>
    <div class="next w-8 h-8 border flex justify-center items-center rounded-full absolute -right-11">
      <arrow class="arrow rotate-180"/>
    </div>
  </div>
</template>

<script>
import arrow from '@/assets/img/arrow.svg'
import NavIcons from '~/components/BaseIcons/NavIcons.vue'

export default {
  props: {
    categories: {
      type: Array,
    },
  },
  components: {
    arrow,
    NavIcons,
  },
};
</script>

<style lang="scss" scoped></style>
