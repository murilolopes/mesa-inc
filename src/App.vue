<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="">
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
<style></style>
