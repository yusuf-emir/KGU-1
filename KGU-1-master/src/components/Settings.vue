<template>
  <div class="w-full mt-8">
    <div class="mx-auto w-96">
      <div class="text-center mb-8">
        <label class="text-gray-700 text-2xl settings-header">
          Bilgilerinizi Güncelleyin
        </label>
      </div>
      <img
        class="object-cover w-32 h-32 border-2 border-indigo-500 rounded-full mx-auto mb-6"
        alt="mentor avatar"
        id="img"
        :src="imgName"
      />
      <input
        type="file"
        id="upload"
        accept="image/*"
        @change="uploadImageHandler"
        hidden
      />
      <label
        for="upload"
        class="py-2 px-2 bg-indigo-500 w-48 cursor-pointer rounded ring-indigo-500 ring-offset-indigo-200 ring-2 ring-offset-2 text-white mx-auto block text-center focus:ring-indigo-500 focus:ring-offset-indigo-200"
      >
        Resim Seçin
      </label>

      <div class="relative mt-8">
        <label class="text-gray-700"> İsim </label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          v-model="firstName"
          placeholder="İsim"
        />
      </div>

      <div class="relative mt-8">
        <label class="text-gray-700"> Soyisim </label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          v-model="lastName"
          placeholder="Soyisim"
        />
      </div>
      <div class="relative mt-8">
        <label class="text-gray-700"> Email </label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="email"
          v-model="email"
          placeholder="E-mail"
        />
      </div>
      <div class="relative mt-8 mb-8">
        <label class="text-gray-700"> Şifre </label>
        <input
          type="password"
          v-model="password"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Şifre"
        />
      </div>
      <div v-if="this.$store.state.userType == 'mentors'" class="mb-8">
        <label class="text-gray-700">
          Danışman Açıklaması
          <textarea
            class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            id="comment"
            v-model="mentor_about"
            placeholder="Hakkınızda"
            rows="5"
            cols="40"
          >
          </textarea>
        </label>

        <div>
          <label class="block text-sm font-medium text-gray-700"> Saatlik Ücret </label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span class="text-gray-500 sm:text-sm"> ₺ </span>
            </div>
            <input
              type="number"
              name="price"
              id="hour_price"
              class="focus:ring-indigo-500 border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md"
              placeholder="0.00"
              v-model="hour_price"
            />
            <div class="absolute inset-y-0 right-0 flex items-center">
              <label class="sr-only"> Saatlik Ücret </label>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        @click="updateInfos"
        class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Güncelle
      </button>
    </div>
    <img src="@/assets/man.png" alt="man" class="mx-auto mt-8" />
  </div>
</template>

<script>
import axios from "axios";

let userFirstname = "";
let userLastname = "";
let userEmail = "";
let mentor_about = "";
let hour_price = "";
let image = "";
export default {
  name: "Settings",
  data() {
    return {
      firstName: userFirstname,
      lastName: userLastname,
      email: userEmail,
      password: "",
      userType: "",
      mentor_about,
      hour_price,
      imgName: image
        ? `https://kguproject.herokuapp.com/uploads/avatars/${image}`
        : "https://kguproject.herokuapp.com/uploads/avatars/1620988066024.png",
    };
  },
  methods: {
    updateInfos() {
      let self = this;
      let userId = localStorage.getItem("userId");
      let mentorID = localStorage.getItem("mentorId");

      if (mentorID != undefined) {
        axios
          .post(`https://kguproject.herokuapp.com/api/mentors/update/${mentorID}`, {
            firstname: self.firstName,
            lastname: self.lastName,
            email: self.email,
            password: self.password,
            mentor_about: self.mentor_about,
            hour_price: self.hour_price,
            // photo_path: formatData,
          })
          .then(function (response) {
            console.log(response);
            location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (userId != undefined) {
        axios
          .patch(`https://kguproject.herokuapp.com/api/users/update/${userId}`, {
            firstname: self.firstName,
            lastname: self.lastName,
            email: self.email,
            password: self.password,
          })
          .then(function (response) {
            console.log(response);
            location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    uploadImageHandler(e) {
      let mentorID = localStorage.getItem("mentorId");

      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      if (mentorID != undefined) {
        axios
          .post(
            `https://kguproject.herokuapp.com/api/mentors/update/${mentorID}`,
            formData,
            {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
          )
          .then(function (response) {
            console.log(response);
            // location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
  beforeCreate() {
    let userType = localStorage.getItem("whoIs");
    userFirstname = localStorage.getItem("firstname");
    userLastname = localStorage.getItem("lastname");
    userEmail = localStorage.getItem("email");
    mentor_about = localStorage.getItem("mentor_about");
    hour_price = localStorage.getItem("hour_price");
    image = localStorage.getItem("photo_path");
    this.$store.state.userType = userType;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.settings-header {
  font-family: "Rubik", sans-serif;
}
</style>
