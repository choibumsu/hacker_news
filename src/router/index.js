import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";
import bus from "../utils/bus.js";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/news"
  },
  {
    path: "/news",
    name: "news",
    component: createListView("NewsView"),
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");

      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => next())
        .catch(error => {
          console.log(error);
        });
    }
  },
  {
    path: "/ask",
    name: "ask",
    component: createListView("AskView"),
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");

      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => next())
        .catch(error => {
          console.log(error);
        });
    }
  },
  {
    path: "/jobs",
    name: "jobs",
    component: createListView("JobsView"),
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");

      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => next())
        .catch(error => {
          console.log(error);
        });
    }
  },
  {
    path: "/user/:id",
    component: UserView
  },
  {
    path: "/item/:id",
    component: ItemView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
