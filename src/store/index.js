import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteSection: '',
    mobile: false,
    viewheight: 0,
    technologies: {
      'JavaScript': 'https://github.com/ethancollins0/capstone-frontend',
      'Node.js': 'https://github.com/ethancollins0/capstone-backend',
      'Ruby on Rails': 'https://github.com/codyshaben/fantasy_football_draft_app',
      'Express.js': 'https://github.com/ethancollins0/capstone-backend',
      'React.js': 'https://github.com/ethancollins0/mod-4-frontend',
      'Vue.js': 'https://github.com/ethancollins0/capstone-frontend',
      'Vuex': 'https://github.com/ethancollins0/capstone-frontend',
      'PostgreSQL': 'https://github.com/ethancollins0/capstone-backend',
      'SQLite': 'https://github.com/codyshaben/fantasy_football_draft_app',
      'Python': 'https://github.com/ethancollins0/raspberry-pi-api'
  },
    social: {
      github: 'https://github.com/ethancollins0',
      linkedin: 'https://www.linkedin.com/in/ethan-t-collins/',
      medium: 'https://medium.com/@ethantcollins98'
    },
    projects: [
      {
        title: 'Water.pi',
        description: 'A Web App to Automate Monitoring and Watering of Plants',
        github: 'https://github.com/ethancollins0/capstone-frontend',
        image_url: '@/assets/water_pi.jpg',
        demo: 'https://capstone-frontend.firebaseapp.com/login',
        technologies: ['Node.js', 'Express.js', 'Vue.js', 'Vuex', 'Socket.io', 'Python', 'PostgreSQL', 'Raspberry Pi', ]
      },
      {
        title: 'Survey Manager',
        description: 'A Web app to organize and schedule property surveys',
        github: 'https://github.com/ethancollins0/mod-4-frontend',
        image_url: '@/assets/water_pi.jpg',
        demo: 'https://survey-manager-9c175.firebaseapp.com/login',
        technologies: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL']
      },

      // test projects, remove
      {
        title: 'Water.pi',
        description: 'A Web App to Automate Monitoring and Watering of Plants',
        github: 'https://github.com/ethancollins0/capstone-frontend',
        image_url: '@/assets/water_pi.jpg',
        demo: 'https://capstone-frontend.firebaseapp.com/login',
        technologies: ['Node.js', 'Express.js', 'Vue.js', 'Vuex', 'Socket.io', 'Python', 'PostgreSQL', 'Raspberry Pi', ]
      },
      {
        title: 'Survey Manager',
        description: 'A Web app to organize and schedule property surveys',
        github: 'https://github.com/ethancollins0/mod-4-frontend',
        image_url: '@/assets/water_pi.jpg',
        demo: 'https://survey-manager-9c175.firebaseapp.com/login',
        technologies: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL']
      },
    ]
  },
  mutations: {
    siteSection(state, name){
      state.siteSection = name
    },
    mobile(state){
      state.mobile = true
    },
    viewheight(state, height){
      state.viewheight = height
    },
    belowRange(state, bool){
      state.belowRange = bool
    }
  },
  actions: {

  },
  modules: {
  }
})
