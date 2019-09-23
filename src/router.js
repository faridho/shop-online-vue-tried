import Vue from 'vue'
import Router from 'vue-router'
import Frame from './views/Frame'

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
    
  ]
})
