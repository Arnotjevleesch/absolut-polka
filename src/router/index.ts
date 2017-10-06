import Hello from "@/components/Hello.vue";
import Home from "@/components/Home.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Hello",
      name: "Hello",
      component: Hello,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
});
