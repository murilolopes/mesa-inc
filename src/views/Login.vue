<template>
  <div class="container">
    <div class="login-div">
      <div class="col-sm-4">
        <div class="card">
          <article class="card-body">
            <router-link
              to="/register"
              class="float-right btn btn-outline-primary"
              >Cadastrar</router-link
            >
            <h4 class="card-title mb-4 mt-1">Entrar</h4>
            <hr />
            <b-alert variant="danger" :show="hasError" dismissible>
              {{ loginFormError }}
            </b-alert>
            <form id="signin-form" @submit.prevent="sendLogin">
              <div class="form-group">
                <label>Seu email</label>
                <input
                  name="email"
                  class="form-control"
                  :class="invalidInput('loginForm', 'email')"
                  placeholder="Email"
                  type="email"
                  v-model="$v.loginForm.email.$model"
                  required
                />
                <div class="text-danger" v-if="$v.loginForm.email.$error">
                  <span>Email inválido</span>
                </div>
              </div>
              <div class="form-group">
                <label>Sua senha</label>
                <input
                  class="form-control"
                  :class="invalidInput('loginForm', 'password')"
                  placeholder="******"
                  type="password"
                  v-model="$v.loginForm.password.$model"
                  required
                />
                <div class="text-danger" v-if="$v.loginForm.password.$error">
                  <span>Campo obrigatório</span>
                </div>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  id="load2"
                  data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing Order"
                  :disabled="$v.loginForm.$invalid"
                >
                  Entrar
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import validateMixins from "./../utils/mixins/validateMethods";

export default {
  name: "Login",
  mixins: [validateMixins],
  data() {
    return {
      loginFormError: "",
      loginForm: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    };
  },
  validations: {
    loginForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async sendLogin() {
      if (!this.$v.loginForm.$invalid)
        await this.login({ ...this.loginForm })
          .then(() => this.$router.push({ name: "Places" }))
          .catch((error) => (this.loginFormError = error.response.data.error));
    },
  },
  computed: {
    hasError() {
      return !!this.loginFormError;
    },
  },
};
</script>
<style scoped>
.login-div {
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
