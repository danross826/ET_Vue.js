<template>
	<div class="paginator">
		<router-link :to='{name: this.routeName, params: this.parameters, query: {page: this.getPrev(), pageSize: this.pageSize}}'>Previous</route-link>
		|
		<router-link :to='{name: this.routeName, params: this.parameters, query: {page: this.getNext(), pageSize: this.pageSize}}'>Next</route-link>
	</div>
</template>

<script>
  export default {
  	name: 'paginator',
    data () {
      return {
      }
    },
    created: function() {
      
    },
    filters: {
      
    },
    methods: {
      getNext: function() {
      	return parseInt(this.page) + 1
      }, getPrev: function() {
      	return parseInt(this.page) - 1
      }
    },
    props: ['page', 'pageSize', 'numberOfRecords', 'numberOfPages', 'routeName', 'parameters']
  }
</script>

<style>
	.paginator {
		text-align: center;
	}
</style>