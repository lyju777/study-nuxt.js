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
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { createCartItem, fetchProductById } from '@/api/index'
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
  head() {
    return {
      title: `Shopping Item Detail - ${this.product.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다.`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '상품 상세 페이지',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '상품의 상세 정보를 확인해보세요',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://placeimg.com/640/480/fashion',
        },
      ],
    }
  },

  //   created() {
  //     const id = console.log(this.$route.params.id)
  //     fetchProductById()
  //   },

  methods: {
    async addToCart() {
      const response = await createCartItem(this.product)
      console.log(response)
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
    },
  },
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
