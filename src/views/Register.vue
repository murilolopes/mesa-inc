<template>
  <div class="container">
    <div class="row">
      <aside class="col-sm-4">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title mb-4 mt-1">Cadastrar</h4>
            <hr />
            <b-alert variant="danger" :show="hasError" dismissible>
              {{ registerFormError }}
            </b-alert>
            <form id="registerForm" @submit.prevent="sendRegistration">
              <div class="form-group input-group">
                <input
                  name="full_name"
                  class="form-control"
                  placeholder="Nome completo"
                  type="text"
                  v-model="registerForm.full_name"
                />
              </div>
              <div class="form-group input-group">
                <input
                  name="email"
                  class="form-control"
                  placeholder="Email address"
                  type="email"
                  v-model="registerForm.email"
                />
              </div>
              <div class="form-group input-group">
                <input
                  name="phone"
                  class="form-control"
                  placeholder="Número de telefone"
                  type="tel"
                  v-model="registerForm.phone"
                />
              </div>
              <div class="form-group input-group">
                <select class="form-control" v-model="registerForm.role">
                  <option selected="">Selecione sua profissão</option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Accaunting</option>
                </select>
              </div>
              <div class="form-group input-group">
                <input
                  class="form-control"
                  placeholder="Crie uma senha"
                  type="password"
                  v-model="registerForm.password"
                />
              </div>
              <div class="form-group input-group">
                <input
                  class="form-control"
                  placeholder="Repita a senha"
                  type="password"
                  v-model="registerForm.confirm_password"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
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

export default {
  name: "Register",
  data() {
    return {
      registerFormError: "",
      registerForm: {
        full_name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    sendRegistration() {
      this.register(this.registerForm)
        .then(() => this.$router.push({ name: "Home" }))
        .catch((error) => (this.registerFormError = error.response.data.error));
    },
  },
  computed: {
    hasError() {
      return !!this.registerFormError;
    },
  },
};
</script>
