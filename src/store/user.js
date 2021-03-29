import { User } from "../services/user";

export const state = {};

export const mutations = {};

export const getters = {};

export const actions = {
  async updateUserData({ commit }, payload) {
    return await User.update(payload.id, payload).then(async (response) => {
      const mockedUser = {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        role: "Designer",
        phone: "82996698304",
      };
      await commit(
        "auth/SET_USER",
        { ...mockedUser, ...payload },
        { root: true }
      );
      return response;
    });
  },
};
