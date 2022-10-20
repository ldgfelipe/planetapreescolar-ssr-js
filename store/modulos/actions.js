export const actions = {
  nuxtServerInit ({ commit }, { req }) {
   console.log('nuxt init server')
  },
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    console.log('onAuthStateChangedAction')
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
}
