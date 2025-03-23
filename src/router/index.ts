import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import MovieList from "@/views/MovieList.vue";
import MovieDetails from "@/views/MovieDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      redirect: { name: "MovieList" },
      component: App,
      children: [
        {
          path: "/movies",
          name: "MovieList",
          component: MovieList,
        },
        {
          path: "/movies/:id",
          name: "MovieDetails",
          component: () => import("../views/MovieDetails.vue"),
        },
      ],
    },
  ],
});

export default router;
