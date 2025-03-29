<template>
  <MainLayout>
    <div class="details">
      <div class="details__control">
        <div class="details__link-wrapper" @click="goToMovieList">
          <div>
            <img src="../assets/logo/vector.svg" alt="vector" />
          </div>
          <span class="details__link">Назад к списку</span>
        </div>
      </div>

      <div class="movies__loader" v-if="moviesStore.isLoading">
        <img src="../assets/logo/loader.svg" alt="Загрузка" />
      </div>

      <div v-if="currentMovie">
        <MovieCard :movie="currentMovie" />
      </div>

      <p class="details__message" v-else>
        К сожалению по вашему запросу ничего не найдено...
      </p>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/components/MainLayout.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

import MovieCard from "@/components/MovieCard.vue";
import { useMoviesStore } from "@/stores/useMoviesStore";
import type { Movie } from "@/type";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const moviesStore = useMoviesStore();

const currentMovie = computed(() => {
  const id = Number(route.params.id);
  return moviesStore.moviesList?.find((movie: Movie) => movie.id === id);
});

const goToMovieList = () => {
  router.push({ name: "MovieList" });
  moviesStore.moviesList = [];
};
</script>

<style scoped lang="scss">
.details {
  &__control {
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 40px;
    padding-bottom: 22px;
  }

  &__link-wrapper {
    cursor: pointer;
    width: 176px;
    display: flex;
    justify-content: space-between;
  }

  &__link {
    color: #ff5252fa;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    text-decoration: underline;
  }

  &__message {
    font-size: 32px;
    color: #ffffff;
    font-weight: 500;
  }

  &__loader {
    width: 136px;
    padding-top: 248px;
    margin: auto;
  }
}
</style>
