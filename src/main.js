import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSession)
Vue.config.productionTip = false
Vue.prototype.$http = axios

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/login',
      component: require('./components/LoginForm.vue')
    }
  ]
})



// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
 new Vue({
  router,
  render: h => h(App), 
}).$mount('#app')