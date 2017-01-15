import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App  from './App.vue'
import Shop from './components/Shop.vue'
import RegisterDealer from './components/RegisterDealer.vue'
import Login from './components/Login.vue'
import CreateProduct from './components/CreateProduct.vue'
import Product from './components/Product.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { name: 'shop', path: '/shop/:id', component: Shop },
    { name: 'product', path: '/shop/:shopId/item/:itemId', component: Product },
    { name: 'register_dealer', path: '/register_dealer', component: RegisterDealer },
    { name: 'login', path: '/login', component: Login },
    { name: 'create_product', path: '/create_product', component: CreateProduct }
  ],
  mode: 'history'
})

new Vue({
  router
}).$mount('#app')