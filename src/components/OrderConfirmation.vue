<template>
    <div>
        <div class="row">

            <div class="small-12 medium-9 columns">
                <div class="content">
                    <h1>Order Confirmation</h1>
                    <p>Congratulations!  Your order has been placed successfully.  A confirmation e-mail should be arriving shortly with a summary of your order and what to expect next.</p>

                    <a class="button" href=".?page=single_ffl">Return to Store</a>
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
      this.$router.push({ name: 'shop' })
    }
  }
}
</script>
