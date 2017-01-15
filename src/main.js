import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import AdminApp  from './AdminApp.vue'
import ShopApp  from './ShopApp.vue'

import Shop from './components/Shop.vue'
import Shops from './components/Shops.vue'
import DealerConfirmation from './components/DealerConfirmation.vue'
import DealerDashboard from './components/DealerDashboard.vue'
import DealerRegister from './components/DealerRegister.vue'
import ProductCreate from './components/ProductCreate.vue'
import DealerLogin from './components/DealerLogin.vue'

import Product from './components/Product.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
  	{ path: '/', redirect: "/shop?page=1&pageSize=10"},
    { path: '/shop', component: ShopApp,
    	children: [
    		{ name: 'shop_app', path: '', component: Shops },
    		{ name: 'shop', path: ':shopId', component: Shop },
    		{ name: 'product', path: ':shopId/item/:itemId', component: Product }
    	] 
    },
    { path: '/admin', component: AdminApp,
    	children: [
    		{ name: 'admin_app', path: '', component: DealerLogin },
    		{ name: 'dealer_confirmation', path: 'dealer/confirm', component: DealerConfirmation },
		    { name: 'dealer_dashboard', path: 'dealer/dashboard', component: DealerDashboard },
		    { name: 'dealer_register', path: 'dealer/register', component: DealerRegister },
		    { name: 'dealer_login', path: 'dealer/login', component: DealerLogin },
		    { name: 'product_create', path: 'item/create', component: ProductCreate }
    	] 
    }
  ],
  mode: 'history'
})

new Vue({
  router
}).$mount('#app')