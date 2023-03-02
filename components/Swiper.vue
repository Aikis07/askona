<template>
  <ssr-carousel show-dots :slides-per-page='3' :gutter='40' loop peek-left='110' peek-right='10'>
    <div class="slide">
      <slideone />
    </div>
    <div class="slide">
      <slidetwo />
    </div>
    <div class="slide">
      <slidethree />
    </div>
    <div class="slide">
      <slideone />
    </div>
    <div class="slide">
      <slidethree />
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
}
</script>

<style lang="scss" scoped></style>