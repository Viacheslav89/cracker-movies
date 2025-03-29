import { createRouter, createWebHistory } from "vue-router";
import MovieList from "@/views/MovieList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/movies",
      name: "MovieList",
      component: MovieList,
    },
    {
      path: "/movies/:id",
      name: "MovieDetails",
      component: () => import("../views/MovieDetails.vue"),
      props: true,
    },
  ],
});

export default router;
