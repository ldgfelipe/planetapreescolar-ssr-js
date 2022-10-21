export const mutations = {
  /**
   * @type Mutations
   * @param {Object} state  Obtiene el state de Store
   * @param {Object} authUser Obtiene datos de auth
   * @param {Object} claims Obtiene los datos extras del auth 
   */
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      state.user = {}
      state.claims = {}
      state.is_login=false
    }else{
    state.user = authUser
    // Do this:
    const { uid, email, emailVerified } = authUser
    state.user = { uid, email, emailVerified }
    const {admin, level, premium} = claims
    state.claims={admin, level, premium}
    state.is_login=email ? true : false 
    }
  }
}
