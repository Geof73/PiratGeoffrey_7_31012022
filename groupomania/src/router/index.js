import Vue from 'vue'
import VueRouter from 'vue-router'
import FormInscription from '../components/FormInscription.vue'
import FormConnexion from '../components/FormConnexion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inscription',
    name: 'Inscription',
    component: FormInscription
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: FormConnexion
  }
]

const router = new VueRouter({
  routes
})

export default router
