import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sociales',
    name: 'sociales',
    component: () => import('../views/Redes.vue')
  },
  {
    path: '/acciones',
    name: 'acciones',
    component: () => import('../views/Acciones.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
