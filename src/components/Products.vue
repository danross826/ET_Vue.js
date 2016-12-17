<template>
  <ul class="small-block-grid-1 medium-block-grid-4">
    <li v-for="item in items">
      <a href="#"><img src="http://placehold.it/200x200" alt="Product Image" :title="item.name"></a>
      <h2><a href="#">{{item.name}}</a></h2>
      <a class="button" href="#" data-reveal-id="myModal">Find an FFL</a>
    </li>
  </ul>
</template>

<script>
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
      this.getProducts()
    },
    filters: {
      currency: function(price) {
        return '$' + price.toFixed(2)
      }
    },
    methods: {
      getProducts: function() {
        this.$http.get('http://localhost:8080/trinary-inventory/v1/shop/' + this.shopId + "/items?page=" + this.page + "&pageSize=" + this.pageSize)
          .then((response) => {
            this.items = response.data
          }, (response) => {
            console.log("ERROR")
          })
      },
      addItem: function() {
        this.items.push(this.newItem)
        this.newItem = {}
      }
    },
    props: ['shopId', 'page', 'pageSize']
  }
</script>