import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProfessorsIndex from "../views/ProfessorsIndex.vue";
import ProfessorsShow from "../views/ProfessorsShow.vue";
import ReviewsIndex from "../views/ReviewsIndex.vue";
import ReviewsShow from "../views/ReviewsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/professors",
    name: "professors-index",
    component: ProfessorsIndex,
  },
  {
    path: "/professors/:id",
    name: "professors-show",
    component: ProfessorsShow,
  },
  {
    path: "/reviews/",
    name: "reviews-index",
    component: ReviewsIndex,
  },
  {
    path: "/reviews/:id",
    name: "reviews-show",
    component: ReviewsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
