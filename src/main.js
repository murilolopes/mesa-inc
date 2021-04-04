import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import "./registerServiceWorker";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Loader } from "@googlemaps/js-api-loader";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

window.loader = new Loader({
  apiKey: "AIzaSyB-PRLv1O1Qlj-_q2iVu_kxDIH1pa5ypwo",
  version: "weekly",
  libraries: ["places"],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
