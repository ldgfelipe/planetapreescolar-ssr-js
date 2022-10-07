import Vuex from 'vuex'
import { state } from './modulos/state.js'
import { actions } from './modulos/actions.js'
import { mutations } from './modulos/mutations.js'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default createStore
