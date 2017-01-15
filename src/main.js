import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App  from './App.vue'
import Shop from './components/Shop.vue'
import RegisterDealer from './components/RegisterDealer.vue'
import Login from './components/Login.vue'
import CreateProduct from './components/CreateProduct.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/shop/:id', component: Shop },
    { path: '/register_dealer', component: RegisterDealer },
    { path: '/login', component: Login },
    { path: '/create_product', component: CreateProduct }
  ],
  mode: 'history'
})

new Vue({
  router
}).$mount('#app')

global.fuckRoot = "http://10.0.0.170:8080";