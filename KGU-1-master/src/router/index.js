import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/without_login/Home.vue";
import HomeLogged from "../views/Home";
import Login from "../views/without_login/Login";
import SignUp from "../views/without_login/SignUp";
import MentorView from "../views/MentorView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: {
      render(c) {
        this.$store.state.isHaveToken = localStorage.getItem("token") !== null;
        if (this.$store.state.isHaveToken === false) {
          return c(Home);
        } else {
          return c(HomeLogged);
        }
      },
    },
  },
  {
    path: "/giris-yap",
    name: "Login",
    component: {
      render(c) {
        this.$store.state.isHaveToken =
          localStorage.getItem("token") === null ? false : true;
        if (this.$store.state.isHaveToken === false) {
          return c(Login);
        } else {
          this.$router.push("/");
        }
      },
    },
  },
  {
    path: "/kayit-ol",
    name: "SignUp",
    component: {
      render(c) {
        this.$store.state.isHaveToken =
          localStorage.getItem("token") === null ? false : true;
        if (this.$store.state.isHaveToken === false) {
          return c(SignUp);
        } else {
          this.$router.push("/");
        }
      },
    },
  },
  {
    path: "/mentor/:mentorID",
    name: "MentorView",
    component: {
      render(c) {
        return c(MentorView);
      },
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
