import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numberOfNotes: 4,
    },
    mutations: {
      increment(state) {
        state.numberOfNotes++;
      },
    },
  });

/*

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    // tslint:disable-next-line:no-shadowed-variable
    setNumberOfNotes(state, value) {
      state.numberOfNotes = value;
    },
};

export default new Vuex.Store({
    state,
    mutations,
});

*/
