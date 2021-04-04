<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="justify-content-xl-between"
    >
      <b-navbar-brand to="/">
        <img
          class="brand-size"
          src="img/mesa-inc.svg"
          alt="mesa-inc-front-end-test"
        />
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item
          @click.prevent="toggleSwitch"
          v-if="$store.state.auth.token"
        >
          <b-form-checkbox v-model="switchListOrMap" switch>
            <b>{{ switchLabel }}</b>
          </b-form-checkbox>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="!$store.state.auth.token">
            <b-nav-item to="/login">Entrar</b-nav-item>
            <b-nav-item to="/register">Cadastrar</b-nav-item>
          </template>

          <template v-else>
            <b-nav-item to="/places">
              <b-icon icon="map"></b-icon> Mapa
            </b-nav-item>
            <b-nav-item to="/profile">
              <b-icon icon="person-circle"></b-icon> Perfil
            </b-nav-item>
            <b-nav-item to="/bookmarks">
              <b-icon icon="bookmark-heart-fill"></b-icon> Favoritos
            </b-nav-item>
            <b-nav-item @click.prevent="callLogout()">
              <b-icon icon="x"></b-icon> Sair
            </b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      switchListOrMap: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("app", ["setPlacesViewMode"]),
    callLogout() {
      this.logout().then(() => this.$router.push({ name: "Login" }));
    },
    toggleSwitch() {
      this.switchListOrMap = !this.switchListOrMap;
    },
  },
  computed: {
    ...mapGetters("app", ["listMode"]),
    switchLabel() {
      let mode = this.listMode ? "lista" : "mapa";
      return `Modo ${mode}`;
    },
  },
  watch: {
    switchListOrMap(newValue) {
      this.setPlacesViewMode(!newValue ? "list" : "map");
    },
  },
};
</script>

<style lang="scss">
.brand-size {
  height: 36px;
}
</style>
