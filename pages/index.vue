<template>
  <section>
    <base-content :products="products"/>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['products'])
  },
  mounted() {
    this.$store.dispatch('getProducts')
  },
};
</script>
