<template>
  <div class="container">
    <div class="row">
      <aside class="col-sm-4">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title mb-4 mt-1">Perfil</h4>
            <b-alert variant="danger" :show="hasError" dismissible>
              {{ profileFormError }}
            </b-alert>
            <form id="profileForm" @submit.prevent="sendUpdateUser">
              <div class="form-group input-group">
                <input
                  name="first_name"
                  class="form-control"
                  placeholder="Nome"
                  type="text"
                  v-model="profileForm.first_name"
                />
              </div>
              <div class="form-group input-group">
                <input
                  name="last_name"
                  class="form-control"
                  placeholder="Sobrenome"
                  type="text"
                  v-model="profileForm.last_name"
                />
              </div>
              <div class="form-group input-group">
                <input
                  name="email"
                  class="form-control"
                  placeholder="Email address"
                  type="email"
                  v-model="profileForm.email"
                />
              </div>
              <div class="form-group input-group">
                <input
                  name="phone"
                  class="form-control"
                  placeholder="Número de telefone"
                  type="tel"
                  v-model="profileForm.phone"
                />
              </div>
              <div class="form-group input-group">
                <select class="form-control" v-model="profileForm.role">
                  <option selected="">Selecione sua profissão</option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Accaunting</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
                  Atualizar informações
                </button>
              </div>
            </form>
          </article>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      profileFormError: "",
      profileForm: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role: "",
        avatar: "",
      },
    };
  },
  mounted() {
    this.fillForm();
  },
  methods: {
    ...mapActions("user", ["updateUserData"]),
    sendUpdateUser() {
      this.updateUserData(this.profileForm)
        .then(() => this.fillForm())
        .catch((error) => (this.profileFormError = error.response.data.error));
    },
    fillForm() {
      this.profileForm = Object.assign({}, this.$store.state.auth.loggedUser);
    },
  },
  computed: {
    hasError() {
      return !!this.profileFormError;
    },
  },
};
</script>
