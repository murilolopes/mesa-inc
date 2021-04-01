<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">NavBar</b-navbar-brand>
      <b-navbar-brand>
        <b-form-checkbox v-model="switchListOrMap" switch>
          <b>{{ switchLabel }}</b>
        </b-form-checkbox>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="!$store.state.auth.token">
            <b-nav-item to="/login">Entrar</b-nav-item>
            <b-nav-item to="/register">Cadastrar</b-nav-item>
          </template>
          <b-nav-item-dropdown right v-else>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/profile">Perfil</b-dropdown-item>
            <b-dropdown-item to="/favorites">Favoritos</b-dropdown-item>
            <b-dropdown-item @click.prevent="callLogout()"
              >Sair</b-dropdown-item
            >
          </b-nav-item-dropdown>
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
  },
  computed: {
    ...mapGetters("app", ["listMode"]),
    switchLabel() {
      let modo = this.listMode ? "lista" : "mapa";
      return `Modo ${modo}`;
    },
  },
  watch: {
    switchListOrMap(newValue) {
      this.setPlacesViewMode(!newValue ? "list" : "map");
    },
  },
};
</script>

<style lang="scss"></style>
