<template>
    <div>
        <h1>Become a Dealer</h1>
        <h2>Store Information</h2>
            <table>
                <tr>
                    <th colspan="6">Owner Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="name" placeholder="Name" v-model="newDealer.name"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="email" placeholder="E-mail Address" v-model="newDealer.email"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="phone" placeholder="Phone" v-model="newDealer.phone"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="address" placeholder="Address" v-model="newDealer.address"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="addressTwo" placeholder="Address (Line 2)" v-model="newDealer.addressTwo"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input name="city" placeholder="City" v-model="newDealer.city"/></td>
                    <td colspan="2"><input name="state" placeholder="State" v-model="newDealer.state"/></td>
                    <td colspan="2"><input name="zip" placeholder="ZIP" v-model="newDealer.zip"/></td>
                </tr>
                <tr>
                    <th colspan="6">Store Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeName" placeholder="Store Name" v-model="newDealer.storeName"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeEmail" placeholder="Store E-mail" v-model="newDealer.storeEmail"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storePhone" placeholder="Store Phone" v-model="newDealer.storePhone"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeAddress" placeholder="Store Address" v-model="newDealer.storePhone"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeAddressTwo" placeholder="Store Address (Line 2)" v-model="newDealer.storeAddressTwo"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input name="storeCity" placeholder="Store City" v-model="newDealer.storeCity"/></td>
                    <td colspan="2"><input name="storeState" placeholder="Store State" v-model="newDealer.storeState"/></td>
                    <td colspan="2"><input name="storeZip" placeholder="Store ZIP" v-model="newDealer.storeZip"/></td>
                </tr>
                <tr>
                    <th colspan="6">Other Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="ffl" placeholder="FFL Number" v-model="newDealer.ffl"/></td>
                </tr>
                <tr>
                    <button v-on:click="addDealer()">Submit</button>
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
                newDealer: {}
            }
        },
        methods: {
			addDealer: function() {
				console.log(this.newDealer);
				this.newDealer = {};
			}
		}
    }
</script>
