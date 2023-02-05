import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    error: false,
    userType: "",
    isHaveToken: false,
    nowTab: "mentors",
    allMentors: {},
    searchMentorKey: "",
    keyForSearchMentor: 0,
  },
  mutations: {},
  actions: {},
  modules: {},
});
