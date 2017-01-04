<template>
  <div class="small-12 medium-9 columns" data-equalizer-watch>
    <div class="content">
      <h1>{{shop.name}}</h1>
      <products :shopId='$route.params.id' :page='$route.query.page' :pageSize='$route.query.pageSize'></products>
    </div>
</template>

<script>
  import Products from './Products.vue'

  export default {
    name: 'shop',
    data() {
      return {
        shop: {}
      }
    },
    components: {
      'products': Products
    },
    created: function() {
      this.getShop()
    },
    methods: {
      getShop: function() {
        this.$http.get('http://192.168.1.86:8080/trinary-inventory/v1/shop/' + this.$route.params.id)
          .then((response) => {
            this.shop = response.data
            window.document.title = this.shop.name
          }, (response => {
            console.log("ERROR")
          }))
      }
    }
  }
</script>