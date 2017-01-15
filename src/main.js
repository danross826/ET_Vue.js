import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App  from './App.vue'
import Shop from './components/Shop.vue'
import DealerConfirmation from './components/DealerConfirmation.vue'
import DealerDashboard from './components/DealerDashboard.vue'
import DealerRegister from './components/DealerRegister.vue'
import CreateProduct from './components/CreateProduct.vue'
import Login from './components/Login.vue'
import Product from './components/Product.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { name: 'shop', path: '/shop/:id', component: Shop },
    { name: 'product', path: '/shop/:shopId/item/:itemId', component: Product },
    { name: 'login', path: '/login', component: Login },
    { name: 'dealer_confirmation', path: '/dealer/confirm', component: DealerConfirmation },
    { name: 'dealer_dashboard', path: '/dealer/dashboard', component: DealerDashboard },
    { name: 'dealer_register', path: '/dealer/register', component: DealerRegister },
    { name: 'product_create', path: '/item/create', component: CreateProduct }
  ],
  mode: 'history'
})

new Vue({
  router
}).$mount('#app')