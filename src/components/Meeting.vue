<template>
  <div class="w-96 mx-auto mt-8 text-center">
    <label class="text-gray-700 text-2xl settings-header">
      Bilgilerinizi Güncelleyin
    </label>
    <p class="text-xl mb-2 text-indigo-600 mt-4">Müsait Gün</p>
    <date-picker
      v-model="value1"
      type="date"
      class="shadow"
      :default-value="new Date().setHours(1, 0, 0, 0)"
      :disabled-date="notBeforeToday"
      :disabled-time="notBeforeTodayTwelveOClock"
      value-type="DD/MM/YYYY"
      placeholder="01-02-2021"
      format="DD/MM/YYYY"
    ></date-picker>
    <p class="mt-4 text-xl mb-2 text-indigo-600">Müsait Saat</p>
    <date-picker
      v-model="value2"
      class="shadow"
      format="HH:mm"
      type="time"
      placeholder="Select time"
      :minute-step="5"
    ></date-picker>
    <img src="@/assets/meet.png" alt="meeting" class="absolute bottom-0 w-96" />
    <button
      type="button"
      @click="addDate"
      class="py-2 px-4 mt-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-72 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      Müsait Gün & Saat Ekle
    </button>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/tr";
import axios from "axios";
export default {
  name: "Meeting",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  components: {
    DatePicker,
  },
  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    notBeforeTodayTwelveOClock(date) {
      return date < new Date(new Date().setHours(12, 0, 0, 0));
    },
    addDate() {
      if (this.value1 != "" && this.value2 != "") {
        let mentorID = localStorage.getItem("mentorId");
        let date = this.value1;
        let time = "" + this.value2;
        time = time.substring(16, 21);

        axios
          .patch(
            `https://kguproject.herokuapp.com/api/mentors/update/${mentorID}`,
            {
              free_dates: {
                date,
                hours: time,
              },
            }
          )
          .then(function (response) {
            console.log(response);
            location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });

        this.value1 = "";
        this.value2 = "";
      } else {
        alert("Gün ve Saat Boş Bırakılamaz");
      }
    },
  },
};
</script>

<style scoped></style>
