<template>
  <div>
    <header class="title">
      <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
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

<style scoped>
/* 헤더 관련 스타일 */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
