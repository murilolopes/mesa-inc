import Vue from "vue";
import Vuex from "vuex";
import * as authModule from "./../../../src/store/auth";
import { Auth } from "./../../../src/services/auth";

Vue.use(Vuex);

describe("In a Auth Store", () => {
  describe("Actions", () => {
    it("login, should call Auth.login service, commit SET_TOKEN and dispatch fetchUserData action", async () => {
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
  });
});
