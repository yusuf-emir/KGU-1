<template>
  <div
    class="flex flex-col w-64 h-screen px-4 py-8 shadow-2xl sticky top-0 left-0 text-gray-500"
  >
    <router-link
      to="/"
      class="flex items-center justify-center title-font font-medium items-center text-gray-900 mb-4 mt-4 md:mb-0"
    >
      <img src="../assets/Logo.png" class="w-28" alt="" />
    </router-link>
    <p class="mt-4 mb-1 text-center font-bold text-indigo-500">
      Merhaba {{ firstName }}
    </p>
    <hr />
    <div class="flex flex-col justify-between flex-1 mt-2">
      <nav>
        <button
          v-if="this.$store.state.userType == 'users'"
          class="flex w-full items-center px-4 py-2 focus:outline-none hover:bg-indigo-500 hover:text-gray-50 rounded-md"
          :class="{
            'text-gray-50': this.$store.state.nowTab == 'mentors',
            'bg-indigo-600': this.$store.state.nowTab == 'mentors',
          }"
          @click="changeTab('mentors')"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="mx-4 font-medium">Danışmanlar</span>
        </button>

        <button
          class="flex w-full items-center px-4 py-2 mt-5 focus:outline-none transition-colors duration-200 transform rounded-md hover:bg-indigo-500 hover:text-gray-50"
          :class="{
            'text-gray-50': this.$store.state.nowTab == 'search',
            'bg-indigo-600': this.$store.state.nowTab == 'search',
          }"
          @click="changeTab('search')"
        >
          <ion-icon name="search-outline"></ion-icon>

          <span class="mx-4 font-medium">Arama</span>
        </button>

        <button
          class="flex w-full items-center px-4 py-2 mt-5 focus:outline-none transition-colors duration-200 transform rounded-md hover:bg-indigo-500 hover:text-gray-50"
          :class="{
            'text-gray-50': this.$store.state.nowTab == 'meetings',
            'bg-indigo-600': this.$store.state.nowTab == 'meetings',
          }"
          @click="changeTab('meetings')"
        >
          <ion-icon name="calendar-number-outline" size="small"></ion-icon>

          <span class="mx-4 font-medium">Randevularım</span>
        </button>

        <button
          v-if="this.$store.state.userType == 'users'"
          class="flex w-full items-center px-4 py-2 mt-5 transition-colors focus:outline-none duration-200 transform rounded-md hover:bg-indigo-500 hover:text-gray-50"
          :class="{
            'text-gray-50': this.$store.state.nowTab == 'credit',
            'bg-indigo-600': this.$store.state.nowTab == 'credit',
          }"
          @click="changeTab('credit')"
        >
          <ion-icon name="logo-paypal"></ion-icon>

          <span class="mx-4 font-medium">Kredi Satın Al</span>
        </button>

        <button
          class="flex w-full items-center px-4 py-2 mt-5 transition-colors focus:outline-none duration-200 transform rounded-md hover:bg-indigo-500 hover:text-gray-50"
          :class="{
            'text-gray-50': this.$store.state.nowTab == 'settings',
            'bg-indigo-600': this.$store.state.nowTab == 'settings',
          }"
          @click="changeTab('settings')"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="mx-4 font-medium">Ayarlar</span>
        </button>

        <div
          class="mb-6 mt-1 border-b-2 border-indigo-500 border-l-2 border-r-2 h-4 rounded-b-xl text-center"
        ></div>

        <div
          class="flex items-center px-4 py-2 mt-5 transition-colors duration-200 transform rounded-md hover:bg-indigo-500 hover:text-gray-50 cursor-pointer"
          @click="logout"
        >
          <ion-icon name="exit-outline" class="exit-logo"></ion-icon>

          <span class="mx-4 font-medium">Çıkış Yap</span>
        </div>
      </nav>

      <div class="flex items-center px-4 -mx-2">
        <img
          class="object-cover mx-2 rounded-full h-12 w-12"
          :src="photo_path"
          alt="avatar"
        />
        <div>
          <h4 class="mx-2 font-medium text-gray-800 hover:underline">
            {{ name }}
          </h4>
          <p
            v-if="this.$store.state.userType == 'users'"
            class="mx-2 font-medium text-sm text-gray-400 hover:underline"
          >
            Kredi: {{ credit }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let user = "";
let mentor = "";
let photo_path = "";
import axios from "axios";

export default {
  name: "NavBarLogged",
  data() {
    return {
      whoIs: [],
      userID: 0,
      name: "",
      firstName: "",
      credit: 0,
      searchMentor: "",
      photo_path,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
    changeTab(tab) {
      this.$store.state.nowTab = tab;
    },
  },
  beforeCreate() {
    let userType = localStorage.getItem("whoIs");
    this.$store.state.userType = userType;
    let userID = localStorage.getItem("userId");
    let mentorID = localStorage.getItem("mentorId");
    photo_path = localStorage.getItem("photo_path");

    if (mentorID != undefined) {
      axios
        .get(`https://kguproject.herokuapp.com/api/${userType}/${mentorID}`)
        .then((response) => {
          console.log("basarili");
          if (userType == "mentors") {
            mentor = response.data.mentor;
            console.log(mentor);
            this.name = mentor.firstname + " " + mentor.lastname;
            localStorage.setItem("firstname", mentor.firstname);
            localStorage.setItem("lastname", mentor.lastname);
            localStorage.setItem("mentor_about", mentor.mentor_about);
            localStorage.setItem("hour_price", mentor.hour_price);
            localStorage.setItem("photo_path", mentor.photo_path);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    axios
      .get(`https://kguproject.herokuapp.com/api/${userType}/${userID}`)
      .then((response) => {
        console.log("basarili user");
        if (userType == "users") {
          user = response.data.user;
          console.log(user);
          this.name = user.firstname + " " + user.lastname;
          this.firstName = user.firstname;
          localStorage.setItem("firstname", user.firstname);
          localStorage.setItem("lastname", user.lastname);
          this.credit = user.current_jeton;
          localStorage.setItem("userCredit", user.current_jeton);
        } else if (userType == "mentors") {
          mentor = response.data.mentor;
          console.log("sss" + mentor);
          this.name = mentor.firstname + " " + mentor.lastname;
          this.firstName = mentor.firstname;
          localStorage.setItem("firstname", mentor.firstname);
          localStorage.setItem("lastname", mentor.lastname);
          localStorage.setItem("photo_path", mentor.photo_path);
        }

        localStorage.setItem("userId", user._id);
        console.log(user._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Comfortaa", cursive;
}

header {
  background-color: #f0f3fe;
}
.loginBtn-background-color {
  background: linear-gradient(287.18deg, #fe5762 13.07%, #ff6ba1 110.81%);
  &:hover {
  }
}

.exit-logo {
  font-size: 22px;
}
</style>
