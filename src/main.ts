// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import Compare from "./components/Compare.vue";
import NumberOfNotes from "./components/NumberOfNotes.vue";
import Play from "./components/Play.vue";
import Portee from "./components/Portee.vue";
import router from "./router";
import { store } from "./store";

Vue.config.devtools = true;
Vue.config.productionTip = false;

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#spanid1",
  store,
  render: (h) => h(NumberOfNotes),
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#spanid2",
  store,
  render: (h) => h(Play),
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#divid3",
  store,
  render: (h) => h(Portee),
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#divid4",
  store,
  render: (h) => h(Compare),
});
