<template>
  <MainLayout>
    <div class="movies">
      <div class="movies__header">
        <h3 class="movies__title">Фильмы</h3>
        <SortMovieControl />
      </div>

      <div class="movies__loader" v-if="moviesStore.isLoading">
        <img src="../assets/logo/loader.svg" alt="Загрузка" />
      </div>

      <ul class="movies__list" v-else>
        <li class="movies__item" v-for="movie in sortedMovies" :key="movie.id">
          <MovieCard :movie="movie" />
        </li>
      </ul>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useMoviesStore } from "@/stores/useMoviesStore";
import MovieCard from "@/components/MovieCard.vue";
import MainLayout from "@/components/MainLayout.vue";
import SortMovieControl from "@/components/SortMovieControl.vue";
import { onMounted, computed } from "vue";

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.fetchMovies();
});

const sortedMovies = computed(() => {
  return moviesStore.getMoviesList(moviesStore.selectedOption);
});
</script>

<style scoped lang="scss">
.movies {
  &__header {
    margin: 0 auto;
    color: #ffffff;
    max-width: 1400px;
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 40px;
  }

  &__title {
    margin: 0;
    font-size: 32px;
    padding-bottom: 16px;
    font-weight: 500;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__item {
    margin-bottom: 24px;
    transition: 0.2s ease, box-shadow 0.2s ease;
  }

  &__item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 15px rgb(39, 39, 39);
  }

  &__loader {
    width: 136px;
    padding-top: 248px;
    margin: auto;
  }
}
</style>
