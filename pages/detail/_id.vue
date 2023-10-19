<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <!-- <button type="button" @click="addToCart">Add to Cart</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { fetchProductById } from '@/api/index'
export default {
  name: 'LearnNuxtId',

  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    const product = response.data
    product.imageUrl = product.imageUrl.replace(
      '{id}',
      Math.floor(Math.random() * 30)
    )
    return { product }
  },

  data() {
    return {}
  },

  //   created() {
  //     const id = console.log(this.$route.params.id)
  //     fetchProductById()
  //   },

  methods: {},
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
