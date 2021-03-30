import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./auth";
import * as user from "./user";
import * as place from "./place";

Vue.use(Vuex);

const modules = {
  auth: { ...auth, namespaced: true },
  user: { ...user, namespaced: true },
  place: { ...place, namespaced: true },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
});
