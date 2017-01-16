<template>
	<div>
		<h2>Cart</h2>
		<table v-if="cart != undefined && cart.length != 0">
			<tr>
				<th>Product</th>
				<th>Price</th>
				<th>Quantity</th>
			</tr>
			<tr v-for="item in cart">
				<td>{{item.name}}</td>
				<td>{{item.price}}</td>
				<td>{{item.quantity}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import cartState from '../cartState.js';

	export default {
		computed: {
			cart: function() {
				return cartState.getCart(this.$route.params.shopId);
			}
		}
	}
</script>