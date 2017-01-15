<template>
  <ul class="small-block-grid-1 medium-block-grid-4">
    <li v-for="item in items">
      <router-link :to="{ name: 'product', params: { itemId: item.id, shopId: shop.id }}"><img src="http://placehold.it/200x200" alt="Product Image" :title="item.name"></router-link>
      <h2><router-link :to="{ name: 'product', params: { itemId: item.id, shopId: shop.id }}">{{item.name}}</router-link></h2>
      <a class="button" href="#" data-reveal-id="myModal">Find an FFL</a>
    </li>
  </ul>
</template>

<script>
  import config from '../config.js'

  export default {
    name: "products",
    data () {
      return {
        items: [
        ],
        shop : {}
      }
    },
    created: function() {
      this.shop.id = this.shopId
      this.getProducts()
    },
    filters: {
      currency: function(price) {
        return '$' + price.toFixed(2)
      }
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
    },
    props: ['shopId', 'page', 'pageSize']
  }
</script>