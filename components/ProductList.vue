<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LearnNuxtProductList',

  async asyncData() {
    console.log(1)
    const reponse = await axios.get('http://localhost:3000/products')
    console.log(reponse)
    const products = reponse.data
    return { products }
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
