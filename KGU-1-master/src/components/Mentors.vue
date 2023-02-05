<template>
  <div class="">
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
  </div>
</template>

<script>
let mentors = [];
import axios from "axios";
export default {
  name: "Mentors",
  data() {
    return {
      allMentorsList: mentors,
    };
  },
  methods: {
    mentorProfile(event) {
      let mentorID = event.currentTarget.id;
      this.$router.push({ name: "MentorView", params: { mentorID } });
    },
  },
  beforeCreate() {
    axios
      .get("https://kguproject.herokuapp.com/api/mentors/all-mentors")
      .then(function (response) {
        let allMentors = response.data.mentors;
        if (mentors == "") {
          allMentors.forEach((element) => {
            mentors.push(element);
          });
        }
        console.log(mentors);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik&family=Varta:wght@700&display=swap");

.mentor-name {
  font-family: "Varta", sans-serif;
}
.mentor-description {
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
