<template>
	<div>
		<h1>Shops</h1>
    <paginator :page='page' :pageSize='pageSize' :routeName='"shop_app"' />
		<ul class="small-block-grid-1 medium-block-grid-4">
			<li v-for="shop in shops">
				<router-link :to="{ name: 'shop', params: { shopId: shop.id }}"><img src="http://placehold.it/200x200" alt="Product Image" :title="shop.name"></router-link>
				<h2><router-link :to="{ name: 'shop', params: { shopId: shop.id }}">{{shop.name}}</router-link></h2>
			</li>
		</ul>
    <paginator :page='page' :pageSize='pageSize' :routeName='"shop_app"' />
	</div>
</template>

<script>
  import Paginator from './Paginator.vue'
  import config from '../config.js'

  export default {
    name: "shops",
    data () {
      return {
        shops : []
      }
    },
    components: {
      'paginator': Paginator
    },
    created: function() {
  		this.getShops()
    },
    watch: {
      '$route': 'getShops'
    },
    methods: {
      getShops: function() {
        this.page = this.$route.query.page;
        this.pageSize = this.$route.query.pageSize;

        if (this.page == undefined) {
          this.page = 1;
        }

        if (this.pageSize == undefined) {
          this.pageSize = 12;
        }

        this.$http.get(config.baseUrl + '/trinary-inventory/v1/shop?page=' + this.page + "&pageSize=" + this.pageSize)
          .then((response) => {
            this.shops = response.data
          }, (response) => {
            console.log("ERROR")
          })
      }
    }
  }
</script>