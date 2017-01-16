
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
                        <!-- Product 1 -->
                        <tr>
                            <td></td>
                            <td>Product Name</td>
                            <td><input type="number" value="5"/></td>
                            <td>$10.99</td>
                            <td>$10.99</td>
                        </tr>
                        <!-- Product 2 -->
                        <tr>
                            <td></td>
                            <td>Product Name</td>
                            <td><input type="number" value="5"/></td>
                            <td>$10.99</td>
                            <td>$10.99</td>
                        </tr>
                        <!-- Product 3 -->
                        <tr>
                            <td></td>
                            <td>Product Name</td>
                            <td><input type="number" value="5"/></td>
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
                    <button class="btn btn-primary" @click="submit()">Checkout</button>
                </div>
            </div>
    </div>
</template>

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
      this.$router.push({ name: 'checkout' })
    }
  }
}
</script>
