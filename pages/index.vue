<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  async asyncData() {
    const res = await axios.get(
      'https://vue-lessons-api.herokuapp.com/photo/list'
    )
    return { res: res.data }
  },
  data() {
    return {
      title: 'hi hi hi',
      list: [],
    }
  },
  // fetchOnServer: false,
  async fetch() {
    const res = await axios
      .get('https://vue-lessons-api.herokuapp.com/photo/list')
      .then((res) => res.data)
    this.list = res
    //僅能修改data 不能return value
    this.title = 'Mary'
    console.log('title', this.title)
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 10000) {
      this.$fetch()
    }
  },
}
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p v-if="$fetchState.pending">Loading</p>
    <p v-if="$fetchState.error">ERROR {{ $fetchState.error }}</p>
    <!-- <h1 class="title">{{ name }}</h1> -->
    <Tutorial />
    <img v-for="item in list" :key="item.url" :src="item.url" alt="" />
  </div>
</template>

