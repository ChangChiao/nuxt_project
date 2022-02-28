<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Footer, Header },
}
</script>

<template>
  <div>
    <Header />
    <header>
      <nuxt-link :to="localePath('/')">home</nuxt-link>
      <nuxt-link :to="localePath('/about')">about</nuxt-link>
      <nuxt-link :to="localePath('/life')">life</nuxt-link>
    </header>
    <div>
      <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link>
      <nuxt-link :to="switchLocalePath('es')">es</nuxt-link>
      <nuxt-link :to="switchLocalePath('zh-tw')">zh-tw</nuxt-link>
    </div>
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>