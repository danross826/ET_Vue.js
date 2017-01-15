<template>
    <div>
        <h2>Log In</h2>

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter your username" v-model="credentials.username">
        </div>

        <div class="form-group">
            <input type="password" class='form-control' placeholder='Enter your password' v-model='credentials.password'>
        </div>

        <button class="btn btn-primary" @click="submit()">Access</button>
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
