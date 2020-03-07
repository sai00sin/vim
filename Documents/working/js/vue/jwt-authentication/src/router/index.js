import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/welcome/welcome.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/auth/signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../components/auth/signin.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/dashboard/dashboard.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
