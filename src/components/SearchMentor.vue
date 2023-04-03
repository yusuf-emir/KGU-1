<template>
  <div class="">
    <div class="w-full text-center flex items-end justify-center space-x-6">
      <input
        type="text"
        placeholder="Danışman İsmi"
        class="w-72 border shadow-lg px-4 py-3 mt-8 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none font"
        v-model="searchKey"
        v-on:keyup.enter="search"
      />
      <button
        @click="search"
        class="block px-6 py-2 leading-loose bg-indigo-500 focus:bg-indigo-600 focus:outline-none focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:ring-2 focus:ring-offset-2 text-white text-same text-center font-semibold leading-none hover:bg-indigo-600 rounded-l-2xl rounded-t-2xl"
      >
        Ara
      </button>
    </div>

    <div class="card-columns mx-8">
      <div
        class="card w-96 px-8 py-4 mx-auto bg-white rounded-2xl shadow-xl my-16 border-2 border-indigo-300 transform transition duration-150 hover:scale-105 hover:border-4 hover:border-indigo-600"
        v-for="mentor in allMentorsList"
        :key="mentor._id"
      >
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full"
            alt="mentor avatar"
            :src="mentor.photo_path"
          />
        </div>

        <h2 class="mt-2 text-2xl text-gray-800 md:mt-0 md:text-3xl mentor-name">
          {{ mentor.firstname }} {{ mentor.lastname }}
        </h2>

        <p
          class="mt-2 text-gray-600 hover:font-bold text-same mentor-description"
        >
          {{ mentor.mentor_about }}
        </p>

        <div class="flex justify-between mt-2 items-center">
          <h1 class="text-indigo-600 font-bold text-2xl">
            {{ mentor.hour_price }}₺
          </h1>
          <button
            type="button"
            v-bind:id="mentor._id"
            v-on:click="mentorProfile($event)"
            class="py-1 px-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
          >
            İncele
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="notFound"
      class="w-full text-center flex items-end justify-center"
    >
      <p class="mt-16 text-4xl font-semibold font">Danışman Bulunamadı <span class="text-3xl">😌</span></p>
      <img
        class="w-96 absolute bottom-10"
        src="@/assets/notFound.png"
        alt="not found"
      />
    </div>
  </div>
</template>

<script>
let mentors = [];
import axios from "axios";
export default {
  name: "SearchUser",
  data() {
    return {
      allMentorsList: mentors,
      key: 0,
      searchKey: "",
      notFound: false,
    };
  },

  methods: {
    mentorProfile(event) {
      let mentorID = event.currentTarget.id;
      this.$router.push({ name: "MentorView", params: { mentorID } });
    },

    search() {
      console.log("tiklandi = " + this.searchKey);
      this.get();
      this.key++;
    },

    get() {
      this.notFound = false;
      let searchMentorKey = this.searchKey;
      axios({
        method: "POST",
        url: "https://kguproject.herokuapp.com/api/mentors/search-mentors",
        data: {
          key: searchMentorKey,
        },
      })
        .then((response) => {
          let allMentors = response.data.mentors;
          console.log(allMentors);
          if (allMentors.length < 1) {
            console.log("false oldu");
            this.notFound = true;
          }

          mentors.length = 0;
          allMentors.forEach((element) => {
            mentors.push(element);
          });

          this.$store.state.searchMentorKey = "";
        })
        .catch((error) => {
          console.log(error);
        });
      this.searchKey = "";
    },
  },

  beforeCreate() {
    console.log("create");
    this.get();
  },
  beforeMount() {
    console.log("mount");
    this.get();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.font {
  font-family: "Rubik", sans-serif;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 250px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
}

.card-columns {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem;
  orphans: 1;
  widows: 1;
}
.card-columns .card {
  display: inline-block;
  width: 100%;
}

@media only screen and (max-width: 1660px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}
@media only screen and (max-width: 1024px) {
  .card-columns {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (max-width: 900px) {
  .card-columns {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
}
</style>
