<template>
	<div class="small-12 medium-9 columns" data-equalizer-watch>
		<div class="content">
			<h1>{{item.name}}</h1>

			<div class="row product_data">
				<div class="small-12 medium-6 columns product_image">
					<img src="http://placehold.it/300x300" alt="Product Image" title="Product Image">
				</div>
				<div class="small-12 medium-6 columns product_summary">
					<ul class="product_data">
						<li class="price"><b>Price:</b> {{item.price | currency}}</li>
						<li class="discounted_from"><b>Discounted From:</b></li>
						<li class="quantity">
							<b>Quantity:</b> <input name="quantity"/>
							<button v-on:click="addToCart()" class="button">Add to Cart</button>
						</li>
						<br>
						<li><b>Details</b></li>
						<ul>
							<li v-for="(value, key) in item.attributes"><b>{{key | capitalize}}:</b> {{value | capitalize}}</li>
						</ul>
					</ul>
				</div>
				<div class="small-12 columns product_description">
					<p>{{item.description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from '../config.js'

  	export default {
	    name: "products",
	    data () {
	      	return {
	        	item: {}
	      	}
	    },
	    created: function() {
	      	this.getProduct()
	    },
	    filters: {
	      	currency: function(priceString) {
	      		var price = parseInt(priceString);
	        	return '$' + price.toFixed(2);
	      	},
	      	capitalize: function(string) {
	        	return string.charAt(0).toUpperCase() + string.slice(1);
	      	}
	    },
	    methods: {
	      	getProduct: function() {
	        	this.$http.get(config.baseUrl + '/trinary-inventory/v1/item/' + this.$route.params.itemId)
	          		.then((response) => {
	            	this.item = response.data;
	          	}, (response) => {
	            	console.log("ERROR");
	          	});
	      	},
	      	addToCart: function() {

	      	}
    	}
  	}
</script>

<style type="text/css">
	ul {
		list-style-type: none;
	}
</style>