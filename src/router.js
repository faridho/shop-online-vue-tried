import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile'
import ProductDetail from './views/Product'


import Home from './views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
    
  ]
})
