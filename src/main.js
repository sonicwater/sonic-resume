import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './static/style/reset.css'
import './static/style/base.css'
import VueRouter from 'vue-router'
// import Vuex from 'vuex'
import routerConfig from './routerConfig.js'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
