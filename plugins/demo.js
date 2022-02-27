export default ({ app }, inject) => {
  inject('globalPlugin', {
    log(val) {
      console.log('logTest=', val)
    },
  })
}
