<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="nav">
      <router-link to="/">Mesa</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>
