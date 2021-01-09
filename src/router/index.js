import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: '/', name: 'Home', component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Index.vue') },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "About" */ '@/views/About/Index.vue') },
  { path: '/error', name: 'Error', component: () => import(/* webpackChunkName: "Error" */ '@/views/Error/Index.vue') },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes
})

export default router
