import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected_nav: '',
    mobile: false
  },
  mutations: {
    selectNav(state, name){
      state.selected_nav = name
    },
    mobile(state){
      state.mobile = true
    }
  },
  actions: {

  },
  modules: {
  }
})
