import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home/home.vue'

import guide from '../pages/explain/operatind_guide.vue'
import about from '../pages/explain/about.vue'

import login from '../pages/login/login.vue'
import userInfo from '../pages/userInfo/userInfo.vue'

export default new Router({
  routes: [
    {path:'/opendata',name:'home',component:home},
    
    {path:'/opendata/guide',name:'guide',component:guide},
    {path:'/opendata/about',name:'about',component:about},

    {path:'/opendata/login',name:'login',component:login},
    {path:'/opendata/userInfo',name:'userInfo',component:userInfo},

    {path: '/',redirect:'/opendata'},//错误地址重新定向
    {path: '*',redirect:'/opendata'},//错误地址重新定向
  ]
})
