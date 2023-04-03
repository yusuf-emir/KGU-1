<template>
  <div class="flex justify-center items-center mt-8">
    <div class="relative mt-16">
      <label class="text-gray-700 text-xl credit-header"> Kredi Miktari </label>
      <input
        type="number"
        id="name-with-label"
        class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
        name="email"
        v-model="credit"
        placeholder="Miktar (Örn: 45)"
      />

      <button
        type="button"
        v-on:click="buyCredit"
        class="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Kredi Al
      </button>
    </div>
    <img
      src="@/assets/credit.png"
      alt="credit"
      class="absolute bottom-0 w-4/12"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Credit",
  data() {
    return {
      credit: "",
    };
  },
  methods: {
    buyCredit() {
      console.log("Kredi al basladi");
      let userId = localStorage.getItem("userId");
      axios({
        method: "POST",
        url: "https://kguproject.herokuapp.com/api/users/add-credit",

        data: {
          id: userId,
          quantity: this.credit,
        },
      })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.credit-header {
  font-family: "Rubik", sans-serif;
}
</style>
