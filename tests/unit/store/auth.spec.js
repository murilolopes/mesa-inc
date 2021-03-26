import Vue from "vue";
import Vuex from "vuex";
import * as authModule from "./../../../src/store/auth";
import { Auth } from "./../../../src/services/auth";

Vue.use(Vuex);

describe("In a Auth Store", () => {
  describe("Mutations", () => {
    it("SET_USER should update state with a given user data", async () => {
      const store = new Vuex.Store({
        modules: {
          auth: { ...authModule, namespaced: true },
        },
      });

      const userData = {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      };

      await store.commit("auth/SET_USER", userData);

      expect(store.state.auth.loggedUser).toEqual(userData);
    });

    it("SET_TOKEN should update state with a given user token", () => {
      const store = new Vuex.Store({
        modules: {
          auth: { ...authModule, namespaced: true },
        },
      });

      const token = "QpwL5tke4Pnpja7X4";

      store.commit("auth/SET_TOKEN", token);

      expect(store.state.auth.token).toEqual(token);
    });
  });

  describe("Actions", () => {
    it("on successful login action should call Auth.login service, commit SET_TOKEN and dispatch fetchUserData action", async () => {
      let mockedAuthModule = authModule;
      mockedAuthModule.mutations.SET_TOKEN = jest.fn();
      mockedAuthModule.actions.fetchUserData = jest.fn();

      const authServiceSpy = jest.spyOn(Auth, "login");

      const fetchUserDataActionSpy = jest.spyOn(
        mockedAuthModule.actions,
        "fetchUserData"
      );

      const setTokenMutationSpy = jest.spyOn(
        mockedAuthModule.mutations,
        "SET_TOKEN"
      );

      const store = new Vuex.Store({
        modules: {
          auth: { ...mockedAuthModule, namespaced: true },
        },
      });

      const payload = {
        email: "eve.holt@reqres.in",
        password: "pistol",
      };

      const { data } = await store.dispatch("auth/login", payload);

      expect(authServiceSpy).toHaveBeenCalledWith(payload);
      expect(fetchUserDataActionSpy).toHaveBeenCalledTimes(1);
      expect(setTokenMutationSpy).toHaveBeenCalledWith(
        store.state.auth,
        data.token
      );
    });

    it("when try to login with an invalid email action should call commit SET_ERROR mutation", async () => {
      let mockedAuthModule = authModule;
      mockedAuthModule.mutations.SET_ERROR = jest.fn();

      const setErrorMutationSpy = jest.spyOn(
        mockedAuthModule.mutations,
        "SET_ERROR"
      );

      const store = new Vuex.Store({
        modules: {
          auth: { ...mockedAuthModule, namespaced: true },
        },
      });

      const payload = {
        email: "email@invalid.in",
        password: "pistol",
      };

      const { response } = await store.dispatch("auth/login", payload);

      expect(setErrorMutationSpy).toHaveBeenCalledWith(
        store.state.auth,
        response.data
      );
    });
  });
});
