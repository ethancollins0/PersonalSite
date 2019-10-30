import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected_nav: 'about'
  },
  mutations: {
    selectNav(state, name){
      state.selected_nav = name
    }
  },
  actions: {

  },
  modules: {
  }
})
