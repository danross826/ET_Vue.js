<template>
    <div>
        <h1>Create An Item</h1>
        <h2>Fill Out the Form Below</h2>
        <table>
            <tr>
                <th>Name</th>
                <td><input name="name" v-model="newItem.name"/></td>
            </tr>
            <tr>
                <th>Price [USD]</th>
                <td><input name="price" v-model="newItem.price"/></td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td><input type="number" name="quantity" v-model="newItem.quantity"/></td>
            </tr>
            <tr>
                <th>Description</th>
                <td><textarea name="long_description" v-model="newItem.description"></textarea></td>
            </tr>
            <tr>
                <th>Image</th>
                <td><input type="file" name="product_image"/></td>
            </tr>
            <tr>
                <th colspan="2">Details</th>
            </tr>
            <tr>
                <th>SKU</th>
                <td><input name="sku" v-model="newItem.attributes.sku"/></td>
            </tr>
            <tr>
                <th>UPC</th>
                <td><input name="upc" v-model="newItem.attributes.upc"/></td>
            </tr>
            <tr>
                <th>Manufacturer</th>
                <td><input name="manufacturer" v-model="newItem.attributes.manufacturer"/></td>
            </tr>
            <tr>
                <th>Category</th>
                <td><input name="category"/></td>
            </tr>
            <tr>
                <th colspan="2">Shipping Information</th>
            </tr>
            <tr>
                <th>Weight</th>
                <td><input name="weight"/></td>
            </tr>
            <tr>
                <th>Dimensions</th>
                <td>
                    <input name="length" placeholder="length"/>
                    <input name="width" placeholder="width"/>
                    <input name="depth" placeholder="depth"/>
                </td>
            </tr>
        </table>
        <input class="button" type="submit" value="Save Product"/>
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
                // TODO Add REST call here
			}
		}
    }
</script>
