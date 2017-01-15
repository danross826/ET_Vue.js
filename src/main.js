import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App  from './App.vue'
import Shop from './components/Shop.vue'
import Product from './components/Product.vue'

window.baseUrl = "http://10.0.0.170:8080"

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { name: 'shop', path: '/shop/:id', component: Shop },
    { name: 'product', path: '/shop/:shopId/item/:itemId', component: Product }
  ],
  mode: 'history'
})

new Vue({
  router
}).$mount('#app')
