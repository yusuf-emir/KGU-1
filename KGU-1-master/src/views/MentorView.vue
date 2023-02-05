<template>
  <div>
    <button @click="$router.go(-1)" class="mt-8 ml-8 back-btn">
      <svg
        width="28"
        height="28"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.91394 10L14.0859 10"
          stroke="#4F46E5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.67822 13.752C9.67822 13.752 5.91422 11.224 5.91422 9.99995C5.91422 8.77595 9.67822 6.25195 9.67822 6.25195"
          stroke="#4F46E5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99988 0.75C3.06288 0.75 0.749878 3.063 0.749878 10C0.749878 16.937 3.06288 19.25 9.99988 19.25C16.9369 19.25 19.2499 16.937 19.2499 10C19.2499 3.063 16.9369 0.75 9.99988 0.75Z"
          stroke="#4F46E5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-4 mx-auto">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:mt-0 mx-auto">
          <img
            class="object-cover w-44 h-44 rounded-full mb-4"
            alt="mentor avatar"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
          <h1
            class="text-gray-900 text-3xl title-font font-medium mb-1 mentor-name"
          >
            {{ this.mentorInfo.firstname + " " + this.mentorInfo.lastname }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span
              class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"
            >
            </span>
          </div>
          <p class="leading-relaxed pb-5 mentor-description">
            {{ this.mentorInfo.mentor_about }}
          </p>

          <div class="flex pb-8">
            <span class="title-font font-medium text-2xl text-indigo-600">
              ₺{{ this.mentorInfo.hour_price }}
            </span>
          </div>

          <ul
            v-for="date in dates"
            class="text-xl mentor-description"
            :key="date"
          >
            {{
              date.date
            }}
            <li
              v-for="n in date.hours"
              class="border-b-2 cursor-pointer w-min border-indigo-300 hover:border-indigo-600 mt-2"
              :key="n"
            >
              {{ n }}
            </li>
          </ul>

          <div class="">
            <button
              v-if="this.$store.state.userType == 'users'"
              class="flex ml-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              @click="scheduleMeeting"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer class="absolute bottom-0 right-0 left-0" />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";

let mentor = [];
export default {
  name: "MentorView",
  data() {
    return {
      mentorID: this.$route.params.mentorID,
      mentorInfo: [],
      value1: null,
      dates: [],
    };
  },
  components: {
    Footer,
  },
  beforeCreate() {
    let mentorId = this.$route.params.mentorID;
    let self = this;
    axios
      .get(`https://kguproject.herokuapp.com/api/mentors/${mentorId}`)
      .then(function (response) {
        mentor = response.data.mentor;
        self.mentorInfo = mentor;
        for (let i = 0; i < mentor.free_dates.length; i++) {
          self.dates.push(mentor.free_dates[i]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    scheduleMeeting() {
      let userCredit = localStorage.getItem("userCredit");
      if (parseInt(this.mentorInfo.hour_price) < userCredit) {
        // randevu alma islemi
        alert(this.value1);
      } else {
        alert("Yetersiz Kredi");
        this.$store.state.nowTab = "credit";
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&family=Jura:wght@700&display=swap");
.back-btn:focus {
  outline: 0;
}

.mentor-name {
  font-family: "Jura", sans-serif;
}
.mentor-description {
  font-family: "Rubik", sans-serif;
}
</style>
