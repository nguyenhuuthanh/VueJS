import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Page404 from '@/pages/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
