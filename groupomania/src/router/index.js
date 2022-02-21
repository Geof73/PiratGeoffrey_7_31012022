import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscriptionView from '../views/FormInscription.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionView
  }
]

const router = new VueRouter({
  routes
})

export default router
