import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "./../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Mesa",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/places",
    name: "Places",
    component: () => import("../views/Places.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "Mesa") return next();
  if (!isAuthRoute(to) && !isAuthenticated()) return next({ name: "Login" });

  return next();
});

const isAuthenticated = () => store.getters["auth/isAuthenticated"];
const isAuthRoute = (to) => ["Login", "Register"].includes(to.name);

export default router;
