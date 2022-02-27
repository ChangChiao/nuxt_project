<script>
import axios from 'axios'
export default {
  head: {
    titleTemplate: '%s - Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
  },
  async asyncData({ $axios, $globalPlugin }) {
    //   console.log($axios);
    const res = await $axios.get(
      'https://vue-lessons-api.herokuapp.com/photo/list '
    )
    $globalPlugin.log('lu lu lu')
  },
  asyncData(context) {
    const count = context.app.store.state.count
    return { count }
  },
  methods: {
    handleClick() {
      this.$store.dispatch('handleAdd')
    },
  },
  mounted() {
    console.log('this', this)
    //global
    this.$globalPlugin.log('yo yo yo')

    //store
    console.log('index', this.$store.state.count)

    //module
    console.log(this.$store.state.User.name)
    this.$store.dispatch('User/handUserLog')

    //cors test
    axios.get('/VsWeb/api/GetLstDicCinema').then((res) => {
      console.log(res.data)
    })
  },
}
</script>

<template>
  <div>
    <h1>about me</h1>
    <p>{{ $store.state.count }}</p>
    <p>{{ count }}</p>
    <button @click="handleClick">add</button>
  </div>
</template>