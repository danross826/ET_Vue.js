import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App  from './App.vue'
import Shop from './components/Shop.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/shop/:id', component: Shop }
  ],
  mode: 'history'
})

new Vue({
  router
}).$mount('#app')
