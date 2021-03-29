import { Auth } from "./../services/auth";
import { User } from "./../services/user";

export const state = {
  loggedUser: {},
  token: "",
};

export const mutations = {
  SET_USER(state, user) {
    state.loggedUser = user;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = "";
  },
};

export const getters = {
  isAuthenticated(state) {
    return !!state.token;
  },
};

export const actions = {
  async login({ commit, dispatch }, payload) {
    return await Auth.login(payload).then(async (response) => {
      commit("SET_TOKEN", response.data.token);
      await dispatch("fetchUserData");
      return response;
    });
  },

  async register({ commit, dispatch }, payload) {
    return await Auth.register(payload).then(async (response) => {
      commit("SET_TOKEN", response.data.token);
      await dispatch("fetchUserData", payload);
      return response;
    });
  },

  async fetchUserData({ commit }, payload) {
    return await User.fetch(2).then((response) => {
      const mockedUser = {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        role: "Designer",
        phone: "82996698304",
      };
      commit("SET_USER", { ...mockedUser, ...payload });
      return response;
    });
  },

  async logout({ commit }) {
    return await commit("CLEAR_TOKEN");
  },
};
