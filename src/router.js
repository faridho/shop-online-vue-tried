import Vue from 'vue'
import Router from 'vue-router'
import Frame from './views/Frame'
import Detail from './views/Detail'
import Profile from './views/Profile'


import Home from './views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/frame',
      name: 'frame',
      component: Frame
    },

    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/',
      name: 'home',
      component: Home
    }
    
  ]
})
