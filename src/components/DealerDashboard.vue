<template>
	<div>
		<h2>Inventory</h2>
		<button>Add Item</button>
		<table>
				<div v-for="item of items">
					<thead>
						<tr>
							<th>SKU</th>
							<th>name</th>
							<th>Price</th>
							<th>Quantity</th>
						</tr>
					</thead>
				<tr>
					<td>{{ item.SKU }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.price }}</td>
					<td>{{ item.quantity }}</td>
				</tr>
			</div>

		</table>
		<h2>Orders</h2>
		<router-link :to="{ name: 'shop', params: { shopId: 3 }}" class="button">View Store</router-link>
		<table>
			<thead>
				<tr>
					<th>Order #</th>
					<th>Date</th>
					<th>Customer Name</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>00001</td>
					<td>12/1/2016</td>
					<td>John Smith</td>
					<td>503.26</td>
				</tr>
				<tr>
					<td>00002</td>
					<td>12/1/2016</td>
					<td>John Smith</td>
					<td>503.26</td>
				</tr>
				<tr>
					<td>00003</td>
					<td>12/1/2016</td>
					<td>John Smith</td>
					<td>503.26</td>
				</tr>
			</tbody>
		</table>
</template>

<script>
	import Products from './Products.vue'
  	import config from '../config.js'

  export default {
    name: 'dealerDashboard',
    data() {
      return {
        items: [],
        shopId: '3',
        page: '1',
        pageSize: '12'
      }
    },
    created: function() {
    	this.getProducts();
    },
    methods: {
      getProducts: function() {
        this.$http.get(config.baseUrl + '/trinary-inventory/v1/shop/' + this.shopId + "/items?page=" + this.page + "&pageSize=" + this.pageSize)
          .then((response) => {
            this.items = response.data
          }, (response) => {
            console.log("ERROR")
          })
      }
    }
  }
</script>