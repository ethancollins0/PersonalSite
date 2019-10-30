import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected_nav: '',
    mobile: false,
    projects: [
      {
        title: 'Water.pi',
        description: 'A Web App to Automate Monitoring and Watering of Plants',
        github: 'https://github.com/ethancollins0/capstone-frontend',
        image_url: '@/assets/water_pi.jpg',
        demo: 'https://capstone-frontend.firebaseapp.com/login',
        technologies: ['Node.js,', 'Express.js,', 'Vue.js,', 'Vuex,', 'Socket.io,', 'Python,', 'PostgreSQL,', 'Raspberry Pi', ]
      },
      {
        title: 'Survey Manager',
        description: 'A Web app for property managers to organize and schedule surveys',
        github: 'https://github.com/ethancollins0/mod-4-frontend',
        image_url: '@/assets/water_pi.jpg',
        demo: 'https://survey-manager-9c175.firebaseapp.com/login',
        technologies: ['Node.js,', 'Express.js,', 'React.js,', 'PostgreSQL']
      },
    ]
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
