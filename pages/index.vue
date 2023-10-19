<template>
  <div class="app">
    <main>
      <div><input type="text" /></div>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LearnNuxtMainJs',

  async asyncData() {
    const reponse = await axios.get('http://localhost:3000/products')
    // console.log(reponse)
    const products = reponse.data
    return {
      products: products.map((item) => ({
        ...item,
        imageUrl: item.imageUrl.replace('{id}', Math.floor(Math.random() * 30)),
      })),
    }
  },

  // data() {
  //   return {
  //     products: [],
  //   }
  // },

  // async created() {
  // },

  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`)
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
