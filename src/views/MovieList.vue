<template>
  <MainLayout>
    <div class="movies">
      <div class="movies__control control">
        <h3 class="control__title">Фильмы</h3>
        <div class="control__checkbox-wrapper">

          <label class="control__radio-label">
            <img 
              class="control__radio-image"
              :class="{ 'control__radio-image--active': moviesStore.selectedOption === 'one' }"
            ></img>
            <input type="radio" value="one" v-model="moviesStore.selectedOption" />
            Отсортировать по названию
          </label>

          <label class="control__radio-label">
            <img 
              class="control__radio-image"
              :class="{ 'control__radio-image--active': moviesStore.selectedOption === 'two' }"
            ></img>
            <input type="radio" value="two" v-model="moviesStore.selectedOption" />
            Отсортировать по году
          </label>
          
        </div>
      </div>

      <div class="movies__loader" v-if="moviesStore.isLoading">
        <img src="../assets/logo/loader.svg" alt="Загрузка" />
      </div>

      <ul class="movies__list movies-list" v-else>
        <li
          class="movies__item movies-item"
          v-for="movie in moviesStore.getMoviesList(moviesStore.selectedOption)"
        >
          <MovieCard :movie="movie" />
        </li>
      </ul>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useMoviesStore } from "@/stores/useMoviesStore";
import { ref, computed } from "vue";
import MovieCard from "@/components/MovieCard.vue";
import MainLayout from "@/components/MainLayout.vue";

const moviesStore = useMoviesStore();
moviesStore.fetchMovies();

// const selectedOption = ref("");

</script>

<style scoped lang="scss">
.movies {
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

.control {
  margin: 0 auto;
  color: #ffffff;
  max-width: 1400px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 40px;

  &__title {
    margin: 0;
    font-size: 32px;
    padding-bottom: 16px;
    font-weight: 500;
  }

  &__checkbox-wrapper {
    width: 475px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding-bottom: 16px;
    color: #c4c4c4;
  }

  &__radio-label {
    text-align: center;
  }

  &__radio-label input {
    display: none;
    padding-bottom: 15px;
    border: none;
  }

  &__radio-image {
    width: 15px;
    height: 15px;
    background: url("../assets/logo/ic_check_box.svg") no-repeat center center;
    margin-right: 5px;
  }

  &__radio-image--active {
    background: url("../assets/logo/ic_check_box_active.svg") no-repeat center center;
  }
}
</style>
