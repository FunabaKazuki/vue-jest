import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Sample from '../components/Sample.vue'
import Music from '../views/Music.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/result/:keyword',
    name: 'result',
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
