<template>
    <div>
        <h1>Become a Dealer</h1>
        <h2>Store Information</h2>
        <form action=".?page=register_complete" method="post">
            <table>
                <tr>
                    <th colspan="6">Owner Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="name" placeholder="Name"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="email" placeholder="E-mail Address"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="phone" placeholder="Phone"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="address" placeholder="Address"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="address2" placeholder="Address (Line 2)"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input name="city" placeholder="City"/></td>
                    <td colspan="2"><input name="state" placeholder="State"/></td>
                    <td colspan="2"><input name="zip" placeholder="ZIP"/></td>
                </tr>
                <tr>
                    <th colspan="6">Store Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="store_name" placeholder="Store Name"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="store_email" placeholder="Store E-mail"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="store_phone" placeholder="Store Phone"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="store_address" placeholder="Store Address"/></td>
                </tr>
                <tr>
                    <td colspan="6"><input name="store_address2" placeholder="Store Address (Line 2)"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input name="store_city" placeholder="Store City"/></td>
                    <td colspan="2"><input name="store_state" placeholder="Store State"/></td>
                    <td colspan="2"><input name="store_zip" placeholder="Store ZIP"/></td>
                </tr>
                <tr>
                    <th colspan="6">Other Information</th>
                </tr>
                <tr>
                    <td colspan="6"><input name="ffl" placeholder="FFL Number"/></td>
                </tr>
                <tr>
                    <th colspan="6"><input type="submit" value="Submit Order"/></th>
                </tr>
            </table>
        </form>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>

    export default {
        data () {
            return {
                message: 'Hello World'
            }
        }
    }
</script>
