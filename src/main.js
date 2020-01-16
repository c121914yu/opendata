import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* axios */
import axios from 'axios'
Vue.prototype.$axios = axios//全局使用axios

/* element-ui库 */
import '../static/element/index.css' //自定义主题
import Element from 'element-ui';
Vue.use(Element, {zIndex: 3000 });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
