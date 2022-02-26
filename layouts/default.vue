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
    <!-- <header>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/about">about</nuxt-link>
      <nuxt-link to="/life">life</nuxt-link>
    </header> -->
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>