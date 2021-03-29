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
      await dispatch("fetchUserData");
      return response;
    });
  },

  async fetchUserData({ commit }, user_id = 2) {
    return await User.fetch(user_id).then((response) => {
      const mockedUser = {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        role: "Designer",
        phone: "82996698304",
      };
      commit("SET_USER", mockedUser);
      return response;
    });
  },
};
