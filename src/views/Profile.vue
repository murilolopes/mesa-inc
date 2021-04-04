<template>
  <div class="container">
    <div class="profile-div">
      <aside class="col-sm-4">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title mb-4 mt-1 text-center">Perfil</h4>
            <b-alert variant="danger" :show="hasError" dismissible>
              {{ profileFormError }}
            </b-alert>
            <form id="profileForm" @submit.prevent="sendUpdateUser">
              <div class="form-group input-group justify-content-center">
                <b-avatar
                  :src="$store.state.auth.loggedUser.avatar"
                  size="6rem"
                ></b-avatar>
              </div>
              <div class="form-group">
                <input
                  name="first_name"
                  class="form-control"
                  :class="invalidInput('first_name')"
                  placeholder="Nome"
                  type="text"
                  v-model="$v.profileForm.first_name.$model"
                />
                <div class="text-danger" v-if="$v.profileForm.last_name.$error">
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  name="last_name"
                  class="form-control"
                  :class="invalidInput('last_name')"
                  placeholder="Sobrenome"
                  type="text"
                  v-model="$v.profileForm.last_name.$model"
                />
                <div class="text-danger" v-if="$v.profileForm.last_name.$error">
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  name="email"
                  class="form-control"
                  :class="invalidInput('email')"
                  placeholder="Email address"
                  type="email"
                  v-model="$v.profileForm.email.$model"
                />
                <div class="text-danger" v-if="$v.profileForm.last_name.$error">
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  name="phone"
                  class="form-control"
                  placeholder="Número de telefone"
                  type="tel"
                  v-model="profileForm.phone"
                />
              </div>
              <div class="form-group">
                <select class="form-control" v-model="profileForm.role">
                  <option selected="">Selecione sua profissão</option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Accaunting</option>
                </select>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  :disabled="$v.profileForm.$invalid"
                >
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
import { required, email } from "vuelidate/lib/validators";

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
  validations: {
    profileForm: {
      first_name: { required },
      last_name: { required },
      email: {
        required,
        email,
      },
    },
  },
  mounted() {
    this.fillForm();
  },
  methods: {
    ...mapActions("user", ["updateUserData"]),
    sendUpdateUser() {
      this.$v.$touch();

      if (!this.$v.profileForm.$invalid)
        this.updateUserData(this.profileForm)
          .then(() => this.fillForm())
          .catch(
            (error) => (this.profileFormError = error.response.data.error)
          );
    },
    fillForm() {
      this.profileForm = Object.assign({}, this.$store.state.auth.loggedUser);
    },
    invalidInput(field) {
      return this.$v.profileForm[field].$error ? "is-invalid" : "";
    },
  },
  computed: {
    hasError() {
      return !!this.profileFormError;
    },
  },
};
</script>

<style scoped>
.profile-div {
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
