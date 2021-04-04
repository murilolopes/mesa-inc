<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
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
<style lang="scss">
@import "./assets/styles/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
