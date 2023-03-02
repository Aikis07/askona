<template>
  <div class="header">
    <a href="#">
      <div class="header__promo flex justify-center bg-promo-color">
        <promotion-view />
      </div>
    </a>
    <div class="header__main mx-24">
      <div class="header__top my-6 flex items-center justify-between">
        <askona-logo />
        <div class="header__cityes flex items-center">
          <p class="header__name mr-1">
            Минск
          </p>
          <arrow-bottom />
        </div>
        <div class="header__markets">
          <p class="header__name mr-1">
            Магазины: 30
          </p>
        </div>
        <div class="header__search relative flex">
          <input class="header__input outline-none border items-center justify-center py-3 pl-12 rounded text-sm w-649"
            type="text" placeholder="Поиск по товарам...">
          <search class="header__icon absolute self-center ml-4" />
        </div>
        <div class="header__callback flex items-center border rounded cursor-pointer px-5 text-sm py-3">
          <phone />
          <p class="header__text ml-4">
            Перезвоните мне
          </p>
        </div>
        <div class="header__numbers flex items-center">
          <p class="header__nums text-lg font-semibold">
            7176
          </p>
          <p class="header__text w-12 text-xs text-promo-color ml-2">
            показать номера
          </p>
        </div>
        <div class="header__icons flex items-center gap-7">
          <person />
          <comparison />
          <div class="header__favourites relative">
            <favourites />
            <div
              class="header__val absolute -right-3 -top-3 bg-promo-color rounded-full w-5 h-5 text-xs flex justify-center items-center">
              <p class="header__value text-white">
                14
              </p>
            </div>
          </div>
          <div @click="onClickBasket" class="header__basket relative cursor-pointer">
            <basket />
            <div
              class="header__val absolute -right-3 -top-3 bg-promo-color rounded-full w-5 h-5 text-xs flex justify-center items-center">
              <p class="header__value text-white">
                {{ basket.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="header__bottom flex items-center justify-between gap-28">
        <div class="header__menu flex items-center bg-promo-color px-4 py-2 cursor-pointer">
          <menu-icon />
          <p class="header__products ml-3 text-white whitespace-nowrap">
            Все товары
          </p>
        </div>
        <div class="header__nav flex items-center w-full justify-between">
          <p class="header__item">
            Матрасы
          </p>
          <p class="header__item">
            Подушки
          </p>
          <p class="header__item">
            Кровати
          </p>
          <p class="header__item">
            Одеяла
          </p>
          <p class="header__item">
            Диваны
          </p>
          <p class="header__item">
            Детские товары
          </p>
          <p class="header__item">
            Мебель
          </p>
          <p class="header__item">
            Для дома
          </p>
        </div>
        <div class="header__sale flex items-center gap-2">
          <sale />
          <p class="header__item text-red-500">
            Акции
          </p>
        </div>
      </div>
    </div>
    <swiper :slides="slides" class="swiper pt-10" />
  </div>
</template>

<script>
import askonaLogo from '@/assets/img/askona-logo.svg';
import arrowBottom from '@/assets/img/arrow-bottom.svg';
import search from '@/assets/img/search.svg';
import phone from '@/assets/img/phone.svg';
import Person from '@/assets/img/person.svg';
import Comparison from '@/assets/img/Comparison.svg';
import Favourites from '@/assets/img/Favourites.svg';
import Basket from '@/assets/img/Basket.svg';
import MenuIcon from '@/assets/img/menu-icon.svg';
import Sale from '@/assets/img/Sale.svg';
import Swiper from '@/components/Swiper.vue'

export default {
  components: {
    askonaLogo,
    arrowBottom,
    search,
    phone,
    Person,
    Comparison,
    Favourites,
    Basket,
    MenuIcon,
    Sale,
    Swiper,
  },
  props: {
    basket: {
      type: Array,
    },
  },
  data() {
    return {
      isBasket: false,
      slides: [
        {
          id: 1,
          name: 'slideone',
        },
        {
          id: 2,
          name: 'slidetwo',
        },
        {
          id: 3,
          name: 'slidethree',
        },
        {
          id: 4,
          name: 'slideone',
        },
        {
          id: 5,
          name: 'slidetwo',
        }
      ]
    }
  },
  methods: {
    onClickBasket() {
      this.$emit('showBasket', true)
    }
  },
};
</script>

<style lang="scss" scoped></style>
