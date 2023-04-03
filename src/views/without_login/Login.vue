<template>
  <div v-if="!forgetPassword">
    <transition name="fade">
      <ErrorAlert
        v-if="isError"
        class="mx-auto mb-4 lg:absolute lg:top-5 lg:right-5"
      />
    </transition>
    <div
      class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg lg:max-w-4xl md:mt-32"
    >
      <div
        class="hidden bg-cover pr-5 lg:block lg:w-1/2"
        style="
          background-image: url('https://elements-cover-images-0.imgix.net/02ec0894-22c0-4d03-922b-b6863e1c0c2a?auto=compress%2Cformat&fit=max&w=2740&s=197207c703e48a73ff81abed8219a2f9');
          background-position: center;
        "
      ></div>

      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <img
          src="https://www.kgu.0x778.me/img/Logo.ed60e589.png"
          class="w-24 mx-auto hidden md:block"
          alt=""
        />

        <p class="text-xl text-center text-gray-600">Hoşgeldiniz</p>

        <div class="mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600"
            for="LoggingEmailAddress"
          >
            Email Adresiniz
          </label>
          <input
            v-model="user.email"
            id="LoggingEmailAddress"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
            placeholder="Email"
          />
        </div>

        <div class="mt-4">
          <div class="flex justify-between">
            <label
              class="block mb-2 text-sm font-medium text-gray-600"
              for="loggingPassword"
              >Şifreniz
            </label>
            <span
              v-on:click="toggleForgetPasswordView"
              class="text-xs text-gray-500 hover:underline"
              >Şifrenizi mi unuttunuz?</span
            >
          </div>

          <input
            v-model="user.password"
            id="loggingPassword"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            type="password"
            placeholder="Şifre"
          />
        </div>
        <label class="flex items-center space-x-3 mt-4">
          <input
            v-model="isMentor"
            type="checkbox"
            name="checked-demo"
            class="rounded form-checkbox"
          />
          <span class="text-gray-700 font-normal text-sm">
            Danışman Hesabın İle Giriş Yap
          </span>
        </label>
        <div class="mt-4">
          <button
            v-if="!isLoading"
            @click="login"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-indigo-500 to-purple-400 rounded focus:outline-none focus:bg-gray-600"
          >
            Giriş Yap
          </button>

          <orbit-spinner
            v-else
            :animation-duration="1200"
            :size="40"
            color="#ff1d5e"
            class="mx-auto"
          />
        </div>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/4 border-b md:w-1/4"></span>

          <router-link
            to="/kayit-ol"
            class="text-xs text-gray-500 uppercase hover:underline text-center"
          >
            Hesabınız Yok Mu? <br />
            Kayıt Olun
          </router-link>

          <span class="w-1/5 border-b md:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>

  <!--    forgot password-->
  <div
    v-else
    class="flex justify-center max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg lg:max-w-4xl md:mt-28"
  >
    <section class="bg-white">
      <div class="max-w-3xl px-4 py-16 mx-auto text-center">
        <h1 class="text-3xl font-semibold text-gray-800">
          Şifrenizi Mi Unuttunuz?
        </h1>
        <p class="max-w-md mx-auto mt-4 text-gray-500">
          Şifrenizi sıfırlamak için aşağıya email adresinizi girin ve gelen
          emailde şifrenizi nasıl sıfırlayabileceğiniz anlatılmaktadır.
        </p>

        <div
          class="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4"
        >
          <input
            id="email"
            type="email"
            class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Email Adresiniz"
          />

          <button
            class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Şifre Sıfırla
          </button>
        </div>
        <div @click="toggleForgetPasswordView" class="mt-6 cursor-pointer">
          Şifremi hatırlıyorum
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { OrbitSpinner } from "epic-spinners";
import ErrorAlert from "../../components/without_login_components/ErrorAlert";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      forgetPassword: false,
      isMentor: false,
      isLoading: false,
      isError: false,
    };
  },

  methods: {
    toggleForgetPasswordView() {
      this.forgetPassword = !this.forgetPassword;
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },
    toggleIsError() {
      this.isError = true;
    },
    login() {
      this.toggleIsLoading();
      this.isError = false;
      let whoIs = this.isMentor ? "mentors" : "users";
      axios({
        method: "POST",
        url: `https://kguproject.herokuapp.com/api/${whoIs}/signin`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        data: {
          ...this.user,
        },
      })
        .then((res) => {
          console.log(this.user);
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", this.user.email);
          localStorage.setItem("whoIs", whoIs);

          let parsedToken = parseJwt(res.data.token);
          console.log("parsed ", parsedToken);
          let userIdToLStorage = parsedToken.id;
          if (whoIs == "users") {
            localStorage.setItem("userId", userIdToLStorage);
          } else {
            localStorage.setItem("mentorId", userIdToLStorage);
          }

          this.$router.push("/");
          this.$store.state.isLogged = true;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            this.toggleIsError();
            this.toggleIsLoading();
          }
        });
    },
  },
  components: {
    OrbitSpinner,
    ErrorAlert,
  },
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
