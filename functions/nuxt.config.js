// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Planetapreescolar',
    title: 'planteapreescolar-ssr-js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/dotenv'
  ],
  firebase: {
    config: {
      apiKey: process.env.FB_APIKEY,
      authDomain: process.env.FB_AUTHDOMAIN,
      databaseURL: process.env.FB_DATABASEURL,
      projectId: process.env.FB_PROJECTID,
      storageBucket: process.env.FB_STORAGEBUCKERT,
      messagingSenderId: process.env.FB_MESSAGINGSENDERID,
      appId: process.env.FB_APPID,
      measurementId: process.env.FB_MEASUREMENTID
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#ad227d',
          melon:'#ff6c5c',
          verylight:'#ebe4eb',
          secondary: '#c93b98',
          greysh:'#484848',
          morado:'#3d1e55',
          accent: '#82B1FF',
          butoncolor:'#135568',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          prysec: '#6C0040'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend () {
      console.log('Conectado a: ' + process.env.FB_PROJECTID)
    }
  }
}
