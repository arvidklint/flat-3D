import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'

import editor from './modules/editor'
import viewer from './modules/viewer'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    editor,
    viewer,
  }
})

export default store

export * from './getters'
export * from './mutations'
export * from './modules'
