<template>
  <div>
    <header>
      <h1>{{ $route.name }} 페이지</h1>
      <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인 페이지</NuxtLink>
      <NuxtLink to="/product">상품 페이지</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LearnNuxtDefault',

  data() {
    return {}
  },

  //   created() {
  //     console.log(this.$routes)
  //   },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
