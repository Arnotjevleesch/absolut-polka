import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numberOfNotes: 4,
        stave: undefined,
        player: undefined,
    },
    mutations: {
      // tslint:disable-next-line:no-shadowed-variable
      setNumberOfNotes(state, value) {
        state.numberOfNotes = parseInt(value, 0);
      },
      setStave(state, value) {
        state.stave = value;
      },
      setPlayer(state, value) {
        state.player = value;
      },
    },
  });
