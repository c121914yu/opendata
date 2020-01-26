import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home/home.vue'

import sort from '../pages/sort/sort.vue'

import guide from '../pages/explain/operatind_guide.vue'
import about from '../pages/explain/about.vue'

import login from '../pages/login/login.vue'

import my from '../pages/my/my.vue'
import myInfo from '../pages/my/myInfo.vue'
import myInform from '../pages/my/myInform.vue'
import myData from '../pages/my/myData.vue'

export default new Router({
  routes: [
    {path:'/opendata',name:'home',component:home},

    {path:'/opendata/sort',name:'sort',component:sort},

    {path:'/opendata/guide',name:'guide',component:guide},
    {path:'/opendata/about',name:'about',component:about},

    {path:'/opendata/login',name:'login',component:login},
    {path:'/opendata/my',component:my,children:[
      {path:'myInfo',name:'myInfo',component:myInfo},
      {path:'myInform',name:'myInform',component:myInform},
      {path:'myData',name:'myData',component:myData},
    ]},

    {path: '/',redirect:'/opendata'},//错误地址重新定向
    {path: '*',redirect:'/opendata'},//错误地址重新定向
  ]
})
