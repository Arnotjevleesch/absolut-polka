// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import NumberOfNotes from "./components/NumberOfNotes.vue";
import Portee from "./components/Portee.vue";
import router from "./router";

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
  el: "#divid2",
  render: (h) => h(NumberOfNotes),
});

// tslint:disable-next-line:no-unused-expression
new Portee({
  el: "#divid3",
  // template: "<Portee :nbNotes='4'/>",
  // components: { Portee },
  render: (h) => h(Portee, {
    props: { nbNotes: "4" },
  }),
});
