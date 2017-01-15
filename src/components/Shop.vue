<template>
  <div>
    <h1>{{shop.name}}</h1>
    <products :shopId='shopId' :page='page' :pageSize='pageSize'></products>
  </div>
</template>

<script>
  import Products from './Products.vue'
  import config from '../config.js'

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
      this.page = this.$route.query.page;
      this.pageSize = this.$route.query.pageSize;
      this.shopId = this.$route.params.shopId;

      if (this.page == undefined) {
        this.page = 1;
      }

      if (this.pageSize == undefined) {
        this.pageSize = 12;
      }

      this.getShop();
    },
    methods: {
      getShop: function() {
        this.$http.get(config.baseUrl + '/trinary-inventory/v1/shop/' + this.shopId)
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