import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Contact from '../views/Contact'
import Blogs from '../views/Blogs'
import Projects from '../views/Projects'

Vue.use(VueRouter)

function about(){
  router.history.push('/about')
}

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact', 
    name: 'contact',
    component: Contact
  },
  {
    path: '/blogs', 
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/projects', 
    name: 'projects',
    component: Projects
  },
  {
    beforeEnter: about,
    path: '*',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
