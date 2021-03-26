import { Auth } from "./../services/auth";
import { User } from "./../services/user";

export const state = {
  loggedUser: {},
  token: "",
  error: {},
};

export const mutations = {
  SET_USER(state, user) {
    state.loggedUser = user;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

export const getters = {};

export const actions = {
  async login({ commit, dispatch }, payload) {
    return await Auth.login(payload)
      .then(async (response) => {
        commit("SET_TOKEN", response.data.token);
        await dispatch("fetchUserData");
        return response;
      })
      .catch(async (error) => {
        commit("SET_ERROR", error.response.data);
        return error;
      });
  },

  async fetchUserData({ commit }, user_id = 2) {
    return await User.fetch(user_id)
      .then((response) => {
        commit("SET_USER", response.data.data);
        return response;
      })
      .catch((error) => {
        commit("SET_ERROR", error.response.data);
        return error;
      });
  },
};
