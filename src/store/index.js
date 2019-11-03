import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteSection: '',
    mobile: false,
    viewheight: 0,
    mailerUrl: 'https://personal-site-nodemailer.herokuapp.com/',
    blogs: [
      {
        title: 'Creating a RESTful API with Node.js and Express', 
        image: 'node.png',
        alt: 'coffee cup',
        intro: 'In this blogpost, I’ll be going through the steps to set up a basic RESTful API with full CRUD act...',
        url: 'https://medium.com/datadriveninvestor/creating-a-restful-api-with-node-js-and-express-17af18ea92e8',
        date: 'September 16th, 2019'
      },
      {
        title: 'Controlled Forms In React',
        image: 'react.png',
        alt: 'React.js logo',
        intro: 'In this blogpost I’ll be going through the steps to create a controlled form. To start out...',
        url: 'https://medium.com/swlh/controlled-forms-in-react-4d223aa33e03',
        date: 'October 8th, 2019'
      },
      {
        title: 'Creating a Table in HTML',
        image: 'table.jpeg',
        alt: 'table',
        intro: 'For our 6-week project using ruby on rails at Flatiron, my project partner and I needed a way to...',
        url: 'https://medium.com/swlh/creating-a-table-in-html-fdfeb129bbd6',
        date: 'August 27th, 2019'
      },
      {
        title: 'Ruby Basics: Iterating Through Collections',
        image: 'ruby.png',
        alt: 'Ruby Logo',
        intro: 'I started learning Ruby around three weeks ago, and the change in the efficiency of my progr...',
        url: 'https://medium.com/ethan-web-dev/ruby-basics-iterating-through-collections-fbe8b6475105',
        date: 'August 5th, 2019'
      },
    ],
    technologies: {
      'JavaScript': 'https://github.com/ethancollins0/capstone-frontend',
      'Node.js': 'https://github.com/ethancollins0/capstone-backend',
      'Ruby on Rails': 'https://github.com/codyshaben/fantasy_football_draft_app',
      'React.js': 'https://github.com/ethancollins0/mod-4-frontend',
      'Vue.js': 'https://github.com/ethancollins0/capstone-frontend',
      'Express.js': 'https://github.com/ethancollins0/capstone-backend',
      'Vuex': 'https://github.com/ethancollins0/capstone-frontend',
      'PostgreSQL': 'https://github.com/ethancollins0/capstone-backend',
      'ActiveRecord': 'https://github.com/codyshaben/fantasy_football_draft_app',
      'SQLite': 'https://github.com/codyshaben/fantasy_football_draft_app',
      'Python': 'https://github.com/ethancollins0/raspberry-pi-api',
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
        image_url: 'watering.gif',
        demo: 'https://capstone-frontend.firebaseapp.com/login',
        technologies: ['Node.js', 'Express.js', 'Vue.js', 'Vuex', 'Socket.io', 'Python', 'PostgreSQL', 'Raspberry Pi', ]
      },
      {
        title: 'Survey Manager',
        description: 'A Web App to Organize and Schedule Property Surveys',
        github: 'https://github.com/ethancollins0/mod-4-frontend',
        image_url: 'survey_manager.png',
        demo: 'https://survey-manager-9c175.firebaseapp.com/login',
        technologies: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL']
      },
      {
        title: 'Fantasy Football Draft',
        description: 'A Web App to Create Teams and Draft Players for Fantasy Football',
        github: 'https://github.com/codyshaben/fantasy_football_draft_app',
        image_url: 'fantasy_football_draft.png',
        technologies: ['ActiveRecord', 'HTML', 'CSS', 'SQLite', 'Ruby on Rails']
      },
      {
        title: 'Playlister',
        description: 'A CLI App Based Around the Spotify API for Searching For and Saving Songs to Playlists',
        github: 'https://github.com/ethancollins0/Playlister',
        image_url: 'playlister.png',
        technologies: ['Ruby', 'ActiveRecord', 'SQLite']
      }
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
