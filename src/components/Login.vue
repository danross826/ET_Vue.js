<template>

    <div>
        <h1>Login</h1>
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
    </div>

</template>
<style>
    body{
        background-color:#FFFFF;
    }
</style>
<script>
export default {
  data() {
    return {
      credentials: {},
      error: ''
    }
  },
  methods: {
    submit() {

      var credentials = this.credentials;
      this.$router.push({ name: 'dealer_dashboard' })
    }
  }
}
</script>
