import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: []
  },
  getters: {
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions,
  modules: {}
});
