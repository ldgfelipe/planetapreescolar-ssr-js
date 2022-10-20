export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    console.log('ON_AUTH_STATE_CHANGED_MUTATION')
    if (!authUser) {
      // claims = null
      // perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
}
