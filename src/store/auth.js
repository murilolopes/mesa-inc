import { Auth } from "./../services/auth";

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

  fetchUserData(user_id = 2) {
    console.log(1, user_id);
    // params: {}, user_id
    //TODO: action to fetch user data and call SET_USER mutation to fill state with user data
  },
};
