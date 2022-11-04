var apirest="local" /// prod

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Planetapreescolar',
    title: 'Planeta Preescolar',
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
    '@/assets/css/temagral.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-pdf.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/firebase'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
  ],
  moment: {
    defaultTimezone: 'America/Los_Angeles',
    locales: ['es']
  },
  loading: {
    color: '#ad227d',
    height: '5px'
  },
  env:{
    functions: apirest === 'local' ? process.env.NODE_ENV==='development' ? process.env.FB_FUNCTION_LOCAL : process.env.FB_FUNCTION_PROD : process.env.FB_FUNCTION_PROD, /* FB_FUNCTION_LOCAL, FB_FUNCTION_DEV, FB_FUNCTION_PROD */
  },
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
      auth: {
       persistence: 'local', // default
  initialize: {
    onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
    onAuthStateChangedAction: 'onAuthStateChangedAction',
    subscribeManually: false
  },
  ssr: false, // default
      }, // Just as example. Can be any other service.
  functions:{
        emulatorPORT:5001
      },
      firestore:{
        memoryOnly: false, // defaultt
        enablePersistence: true,
        persistence: 'local'

      },
      storage:true
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
      console.log('api desarrollo: ' + process.env.functions)

    }
  }
}
