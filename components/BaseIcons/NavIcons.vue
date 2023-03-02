<template>
  <div class="nav__wrapper flex justify-center items-center">
    <component class="nav__icons w-24" :is="category" />
  </div>
</template>

<script>
import ArmChairs from '@/assets/img/nav-img/armchairs.svg'
import Beds from '@/assets/img/nav-img/beds.svg'
import Blank from '@/assets/img/nav-img/blank.svg'
import Blankets from '@/assets/img/nav-img/blankets.svg'
import Covers from '@/assets/img/nav-img/covers.svg'
import ForHome from '@/assets/img/nav-img/forHome.svg'
import Furniture from '@/assets/img/nav-img/furniture.svg'
import Pillows from '@/assets/img/nav-img/pillows.svg'
import Poufs from '@/assets/img/nav-img/poufs.svg'
import Sheets from '@/assets/img/nav-img/sheets.svg'
import Sofas from '@/assets/img/nav-img/sofas.svg'
import mattress from '@/assets/img/nav-img/mattress.svg'


export default {
  components: {
    ArmChairs,
    Beds,
    Blank,
    Blankets,
    Covers,
    ForHome,
    Furniture,
    Pillows,
    Poufs,
    Sheets,
    Sofas,
    mattress,
  },
  props: {
    category: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>