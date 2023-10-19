<template>
  <div>
    <p>메인 페이지 입니다.</p>
    <product-list></product-list>
  </div>
</template>

<script>
// import axios from 'axios'
import ProductList from '~/components/ProductList.vue'

export default {
  name: 'LearnNuxtMainJs',
  components: { ProductList },

  // async asyncData() {
  //   const reponse = await axios.get('http://localhost:3000/products')
  //   console.log(reponse)
  //   const products = reponse.data
  //   return { products }
  // },

  // data() {
  //   return {
  //     products: [],
  //   }
  // },

  // async created() {
  // },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
