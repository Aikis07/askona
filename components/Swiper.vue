<template>
  <ssr-carousel show-dots :slides-per-page='3' :gutter='40' loop peek-left='110' peek-right='10'>
    <div v-for='slide in slides' :key='slide.id' class="wrapper">
      <div class="slide">
        <component class="slide__component" :is="slide.name" />
      </div>
    </div>
  </ssr-carousel>
</template>

<script>
import slideone from '@/assets/img/slider-img/slider-1.svg'
import slidetwo from '@/assets/img/slider-img/slider-2.svg'
import slidethree from '@/assets/img/slider-img/slider-3.svg'

export default {
  components: {
    slideone,
    slidetwo,
    slidethree,
  },
  props: {
    slides: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped></style>