<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Mesa</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <button @click.prevent="callLogout()" v-if="$store.state.auth.token">
        Logout
      </button>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("auth", ["logout"]),
    callLogout() {
      this.logout().then(() => this.$router.push({ name: "Login" }));
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
