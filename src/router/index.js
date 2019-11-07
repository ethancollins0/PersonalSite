import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

function index(to){
  if (to.fullPath != '/Resume.pdf'){
    router.history.push('/')
  }
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
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
