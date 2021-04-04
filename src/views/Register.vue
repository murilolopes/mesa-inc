<template>
  <div class="container">
    <div class="register-div">
      <aside class="col-sm-4">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title mb-4 mt-1">Cadastrar</h4>
            <hr />
            <b-alert variant="danger" :show="hasError" dismissible>
              {{ registerFormError }}
            </b-alert>
            <form id="registerForm" @submit.prevent="sendRegistration">
              <div class="form-group">
                <input
                  name="first_name"
                  class="form-control"
                  :class="invalidInput('registerForm', 'first_name')"
                  placeholder="Nome"
                  type="text"
                  v-model="$v.registerForm.first_name.$model"
                />
                <div
                  class="text-danger"
                  v-if="$v.registerForm.first_name.$error"
                >
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  name="last_name"
                  class="form-control"
                  :class="invalidInput('registerForm', 'last_name')"
                  placeholder="Sobrenome"
                  type="text"
                  v-model="$v.registerForm.last_name.$model"
                />
                <div
                  class="text-danger"
                  v-if="$v.registerForm.last_name.$error"
                >
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  name="email"
                  class="form-control"
                  :class="invalidInput('registerForm', 'email')"
                  placeholder="Email address"
                  type="email"
                  v-model="$v.registerForm.email.$model"
                />
                <div class="text-danger" v-if="$v.registerForm.email.$error">
                  <span>Email inválido</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  name="phone"
                  class="form-control"
                  placeholder="Número de telefone"
                  type="tel"
                  v-model="registerForm.phone"
                />
              </div>
              <div class="form-group">
                <select class="form-control" v-model="registerForm.role">
                  <option selected="">Selecione sua profissão</option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Accaunting</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  :class="invalidInput('registerForm', 'password')"
                  placeholder="Crie uma senha"
                  type="password"
                  v-model="$v.registerForm.password.$model"
                />
                <div class="text-danger" v-if="$v.registerForm.password.$error">
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  :class="invalidInput('registerForm', 'confirm_password')"
                  placeholder="Repita a senha"
                  type="password"
                  v-model="$v.registerForm.confirm_password.$model"
                />
                <div
                  class="text-danger"
                  v-if="$v.registerForm.confirm_password.$error"
                >
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  :disabled="$v.registerForm.$invalid"
                >
                  Criar conta
                </button>
              </div>
              <p class="text-center">
                Já tem uma conta? <router-link to="/login">Entrar</router-link>
              </p>
            </form>
          </article>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, sameAs } from "vuelidate/lib/validators";
import validateMixins from "./../utils/mixins/validateMethods";

export default {
  name: "Register",
  mixins: [validateMixins],
  data() {
    return {
      registerFormError: "",
      registerForm: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  validations: {
    registerForm: {
      first_name: { required },
      last_name: { required },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      confirm_password: {
        required,
        sameAs: sameAs("password"),
      },
    },
  },
  methods: {
    ...mapActions("auth", ["register"]),
    sendRegistration() {
      this.$v.$touch();

      if (!this.$v.registerForm.$invalid)
        this.register(this.registerForm)
          .then(() => this.$router.push({ name: "Home" }))
          .catch(
            (error) => (this.registerFormError = error.response.data.error)
          );
    },
  },
  computed: {
    hasError() {
      return !!this.registerFormError;
    },
  },
};
</script>

<style scoped>
.register-div {
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
