import { createStore } from "vuex";

export default createStore({
  state: {
    age: 0,
  },
  mutations: {
    saveAge(state, value) {
      state.age = value;
    },
  },
  actions: {},
  modules: {},
});
