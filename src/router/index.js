import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

function index(){
  router.history.push('/')
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Resume.pdf',
    name: 'resume'
  },
  {
    beforeEnter: index,
    path: '*',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
