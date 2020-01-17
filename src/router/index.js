import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '../pages/login/login.vue'

export default new Router({
  routes: [
    {path:'/login',name:'login',component:login},
  ]
})
