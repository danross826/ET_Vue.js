<template>
    <div>
        <h2>Log In</h2>

        <table>
            <tr>
                <th>Username</th>
                <td><input name="username" v-model="credentials.name"/></td>
            </tr>
            <tr>
                <th>Password</th>
                <td><input type="password" name="password" v-model="credentials.password"/></td>
            </tr>
            <tr>
                <button class="btn btn-primary" @click="submit()">Access</button>
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
      credentials: {}
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
