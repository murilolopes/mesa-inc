import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./auth";
import * as user from "./user";
import * as place from "./place";
import * as app from "./app";

Vue.use(Vuex);

const modules = {
  auth: { ...auth, namespaced: true },
  user: { ...user, namespaced: true },
  place: { ...place, namespaced: true },
  app: { ...app, namespaced: true },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
});
