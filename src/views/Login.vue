<template>
  <div class="container">
    <div class="row">
      <aside class="col-sm-4">
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
                  placeholder="Email"
                  type="email"
                  v-model="loginForm.email"
                  required
                />
              </div>
              <div class="form-group">
                <label>Sua senha</label>
                <input
                  class="form-control"
                  placeholder="******"
                  type="password"
                  v-model="loginForm.password"
                  required
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  id="load2"
                  data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing Order"
                >
                  Entrar
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
  name: "Login",
  data() {
    return {
      loginFormError: "",
      loginForm: {
        email: "eve.holt@reqres.inx",
        password: "cityslicka",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async sendLogin() {
      await this.login({ ...this.loginForm })
        .then((response) => {
          console.log(1, response);
          this.$router.push({ name: "Home" });
        })
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
