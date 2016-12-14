<template>
  <div id="products-view">
    <div v-for="item in items" class="item">
      <div>
        <div>{{item.name}}</div><div><b>{{item.price | currency}}</b></div>
      </div>
    </div>
  </div>
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

<style>
  .item {
    display: block;
    height: 100px;
    width: 200px;

    border: 1px solid gray;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .item > div {
    display: table;
    height: 100%;
  }

  .item > div > div {
    display: table-cell;
    height: 100%;
    width: 100%;
    vertical-align: middle;
  }

  .item > div > div:first-child {
    text-align: left;
    width: 100%;
  }

  .item > div > div:last-child {
    text-align: right;
    width: 100%;
  }
</style>