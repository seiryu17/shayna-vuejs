import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import shoppingcart from '../views/ShoppingCart.vue'
import success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: shoppingcart
  },
  {
    path: '/success',
    name: 'success',
    component: success
  }
]

const router = new VueRouter({
  routes
})

export default router
