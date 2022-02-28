import en from "./locales/en"
import es from "./locales/es"
import fr from "./locales/fr"
import zh from "./locales/zh"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '有時候～有時候' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/demo.js', '~/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', 'nuxt-i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  proxy: {
    '/VsWeb/api/*': {
      target: 'http://www.vscinemas.com.tw/',
      changeOrigin: true,
    },
  },
  i18n: {
    locales: ['en', 'fr', 'es', 'zh-tw'],
    defaultLocale: 'zh-tw',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        fr,
        es,
        "zh-tw":zh
      },
    },
  },
}
