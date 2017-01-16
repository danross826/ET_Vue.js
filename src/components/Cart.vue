<template>
    <div class="cart">
        <div class="row">
                <div class="content">
                    <h1>Cart</h1>

                    <table>
                        <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart">
                                <td></td>
                                <td>{{item.name}}</td>
                                <td>{{item.quantity}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.price * item.quantity}}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="4">Total</td>
                            <td class="cart_total">$SUM</td>
                        </tr>
                        </tfoot>
                    </table>
                    <button class="btn btn-primary" @click="submit()">Checkout</button>
                </div>
            </div>
    </div>
</template>

<script>
    import cartState from '../cartState.js';

    export default {
      computed: {
        cart: function() {
            return cartState.getCart(this.$route.params.shopId);
        }
      },
      methods: {
        submit() {
          var credentials = this.credentials;
          this.$router.push({ name: 'checkout' })
        }
      }
    }
</script>