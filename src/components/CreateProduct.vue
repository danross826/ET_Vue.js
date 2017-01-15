<template>
    <div>
        <h1>Create An Item</h1>
        <h2>Fill Out the Form Below</h2>
        <table>
            <tr>
                <td colspan="6"><input name="name" placeholder="Name" v-model="newItem.name"/></td>
            </tr>
            <tr>
                <td colspan="6"><input name="price" placeholder="Price" v-model="newItem.price"/></td>
            </tr>
            <tr>
                <td colspan="6"><input name="details" type="text" placeholder="Details" v-model="newItem.details"/></td>
            </tr>
            <tr>
                <button v-on:click="addItem()">Submit</button>
            </tr>
        </table>
    </div>
</template>
<style>
    body{
        background-color:white;
    }
</style>
<script>

    export default {
        data () {
            return {
                newItem: {}
            }
        },
        methods: {
			addItem: function() {
				console.log(this.newItem);
				this.newItem = {};
			}
		}
    }
</script>
