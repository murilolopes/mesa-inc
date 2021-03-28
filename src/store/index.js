import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./auth";

Vue.use(Vuex);

const modules = { auth: { ...auth, namespaced: true } };

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
});
