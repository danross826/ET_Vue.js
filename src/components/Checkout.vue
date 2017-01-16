<template>
    <div>
        <div class="row">

            <div class="small-12 medium-9 columns">
                <div class="content">
                    <h1>Checkout</h1>

                    <h2>Order Details</h2>
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
                        <!-- Product 1 -->
                        <tr>
                            <td><img src="http://placehold.it/50x50" alt="Product Thumbnail" title="Product Thumbnail"></td>
                            <td>Product Name</td>
                            <td>1</td>
                            <td>$10.99</td>
                            <td>$10.99</td>
                        </tr>
                        <!-- Product 2 -->
                        <tr>
                            <td><img src="http://placehold.it/50x50" alt="Product Thumbnail" title="Product Thumbnail"></td>
                            <td>Product Name</td>
                            <td>1</td>
                            <td>$10.99</td>
                            <td>$10.99</td>
                        </tr>
                        <!-- Product 3 -->
                        <tr>
                            <td><img src="http://placehold.it/50x50" alt="Product Thumbnail" title="Product Thumbnail"></td>
                            <td>Product Name</td>
                            <td>1</td>
                            <td>$10.99</td>
                            <td>$10.99</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="4">Total</td>
                            <td class="cart_total">$SUM</td>
                        </tr>
                        </tfoot>
                    </table>

                    <h2>Destination</h2>
                    The order will be sent to <a href=".?page=single_ffl">Dealer Name</a>

                    <h2>Payment Information</h2>


                        <table>
                            <tr>
                                <th colspan="6">Billing Address</th>
                            </tr>
                            <tr>
                                <td colspan="6"><input name="name" placeholder="Name"/></td>
                            </tr>
                            <tr>
                                <td colspan="6"><input name="address" placeholder="Address"/></td>
                            </tr>
                            <tr>
                                <td colspan="6"><input name="address2" placeholder="Address (Line 2)"/></td>
                            </tr>
                            <tr>
                                <td colspan="2"><input name="city" placeholder="City"/></td>
                                <td colspan="2"><input name="state" placeholder="State"/></td>
                                <td colspan="2"><input name="zip" placeholder="ZIP"/></td>
                            </tr>
                            <tr>
                                <th colspan="6">Payment Card</th>
                            </tr>
                            <tr>
                                <td colspan="6"><input name="card" placeholder="Card Number"/></td>
                            </tr>
                            <tr>
                                <td colspan="3"><input name="month" placeholder="MM"/> / <input name="year" placeholder="YY"/></td>
                                <td colspan="3"><input name="cvc" placeholder="CVC"/></td>
                            </tr>
                            <tr>
                                <button class="btn btn-primary" @click="submit()">Submit Order</button>
                            </tr>
                        </table>

                </div>
            </div>
        </div>
    </div>
</template>
<style>
    body{
        background-color:white;
    }
</style>
<script>
export default {
  data() {
    return {
      credentials: {}
    }
  },
  methods: {
    submit() {
      var credentials = this.credentials;
      this.$router.push({ name: 'order_confirmation' })
    }
  }
}
</script>
