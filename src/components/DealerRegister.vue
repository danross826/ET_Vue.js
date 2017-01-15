<template>
    <div>
        <h1>Become a Dealer</h1>
        <h2>Store Information</h2>
            <table>
                <tr>
                    <th colspan="6">User Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="username" placeholder="Username" v-model="newDealer.username"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="password" placeholder="Password" v-model="newDealer.password"/></td>
                </tr>
                <tr>
                    <th colspan="6">Owner Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="firstName" placeholder="First Name" v-model="newDealer.firstName"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="lastName" placeholder="Last Name" v-model="newDealer.lastName"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="email" placeholder="E-mail Address" v-model="newDealer.attributes.emailAddress"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="phone" placeholder="Phone" v-model="newDealer.attributes.phoneNummber"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="address" placeholder="Address" v-model="newDealer.address.streetAddressLine1"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="addressTwo" placeholder="Address (Line 2)" v-model="newDealer.address.streetAddressLine2"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input name="city" placeholder="City" v-model="newDealer.address.city"/></td>
                    <td colspan="2"><input name="state" placeholder="State" v-model="newDealer.address.state"/></td>
                    <td colspan="2"><input name="zip" placeholder="ZIP" v-model="newDealer.address.zipCode"/></td>
                </tr>
                <tr>
                    <th colspan="6">Store Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeName" placeholder="Store Name" v-model="newStore.name"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeEmail" placeholder="Store E-mail" v-model="newStore.attributes.emailAddress
                    "/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storePhone" placeholder="Store Phone" v-model="newStore.attributes.phoneNummber"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeAddress" placeholder="Store Address" v-model="newStore.address.streetAddressLine1"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="storeAddressTwo" placeholder="Store Address (Line 2)" v-model="newStore.address.streetAddressLine2"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input name="storeCity" placeholder="Store City" v-model="newStore.address.city"/></td>
                    <td colspan="2"><input name="storeState" placeholder="Store State" v-model="newStore.address.state"/></td>
                    <td colspan="2"><input name="storeZip" placeholder="Store ZIP" v-model="newStore.address.zipCode"/></td>
                </tr>
                <tr>
                    <th colspan="6">Other Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="ffl" placeholder="FFL Number" v-model="newDealer.attributes.ffl"/></td>
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
                newDealer: {
                    attributes: {},
                    address: {}
                },
                newStore: {
                    attributes: {},
                    address: {}
                }
            }
        },
        methods: {
			addDealer: function() {
				console.log(this.newDealer)
                console.log(this.newDealer.address)
                console.log(this.newStore)
                console.log(this.newStore.address)
                this.$router.push({ name: 'dealer_confirmation' })
			}
		}
    }
</script>
