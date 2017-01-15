<template>
  <div>
    <h1>{{shop.name}}</h1>
    <paginator :page='page' :pageSize='pageSize' :routeName='"shop"' :params='{shopId: shopId}' />
    <products :shopId='shopId' :page='page' :pageSize='pageSize'></products>
    <paginator :page='page' :pageSize='pageSize' :routeName='"shop"' :params='{shopId: shopId}' />
  </div>
</template>

<script>
  import Paginator from './Paginator.vue'
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
      'products': Products,
      'paginator': Paginator
    },
    created: function() {
      this.getShop();
    },
    watch: {
      '$route': 'getShop'
    },
    methods: {
      getShop: function() {
        this.page = this.$route.query.page;
        this.pageSize = this.$route.query.pageSize;
        this.shopId = this.$route.params.shopId;

        if (this.page == undefined) {
          this.page = 1;
        }

        if (this.pageSize == undefined) {
          this.pageSize = 12;
        }
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