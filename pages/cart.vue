<template>
  <div class="container">
    <h1 class="list-title">카트 페이지입니다.</h1>
    <cart-list></cart-list>
  </div>
</template>

<script>
import CartList from '~/components/CartList.vue'
export default {
  name: 'LearnNuxtCart',
  components: { CartList },

  //   async asyncData({ store }) {
  //     await store.dispatch('FETCH_CART_ITEMS')
  //   },

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
