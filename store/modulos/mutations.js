import { state } from "./state"

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
  },
  seleccionaRecurso(state,data){
    state.recursoSelect=data
  },
  vistafase1(state,data){
    state.dialogfase1=data
  },
  vistafase2(state,data){
    state.dialogfase2=data
  },
  agregaRelacionados(state,data){
    state.relacionados=data
  },
  vistaAlertas(state,data){
    state.dialogalerta=data
  },
  cargaTipoalerta(state,data){
    state.tipoalerta=data
  },
  actualizaDescargas(state,data){
    state.descargas=data
  }
}
