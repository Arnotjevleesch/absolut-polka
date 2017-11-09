import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numberOfNotes: 4,
    },
    mutations: {
      // tslint:disable-next-line:no-shadowed-variable
      setNumberOfNotes(state, value) {
        state.numberOfNotes = parseInt(value, 0);
      },
    },
  });
