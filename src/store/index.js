import Vue from "vue";
import Vuex from "vuex";
import projects from "./modules/projects";
import skills from "./modules/skills";
import testimonials from "./modules/testimonials";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projects,
    skills,
    testimonials
  }
});
