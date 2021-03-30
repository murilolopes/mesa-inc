<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="nav">
      <router-link to="/">Mesa</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
    </div>

    <div class="container">
      <router-view />
    </div>
    <place-details-modal></place-details-modal>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import PlaceDetailsModal from "./components/PlaceDetailsModal.vue";

export default {
  name: "App",
  components: { NavBar, PlaceDetailsModal },
};
</script>
