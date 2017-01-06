<template>
    <div>
        <div>
            <form action=".?page=dashboard" method="post">
            <table>
                <tr>
                    <th>Username</th>
                    <td><input name="username"/></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td><input type="password" name="password"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input class="button" type="submit"/></td>
                </tr>
            </table>
        </form>				</div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
