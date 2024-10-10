import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import AppAccounts from '../components/AppAccounts.vue'
import Skull from '../components/Skull.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: AppAccounts
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router