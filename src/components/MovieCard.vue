<template>
  <div class="movie">
    <div class="movie__img-wrapper">
      <img class="movie__img" :src="movie.poster" />
    </div>

    <div class="movie__description description">
      <h3 class="description__title" @click="goToDetails">
        {{ movie.title }}
      </h3>

      <p class="description__genres">
        {{ `${movie.year}, ${movie.genres}` }}
      </p>

      <p class="description__directors">
        ружиссер:
        <span v-for="director in movie.directors">{{ director }}</span>
      </p>

      <div class="description__actors-wrapper">
        <div class="description__actors">
          <span class="description__actors-label">Актёры:</span>
          <span class="description__actors-list">
            <span v-for="(actor, index) in movie.actors" :key="actor">
              {{ actor }},
            </span>
          </span>
        </div>
      </div>

      <p class="description__description">
        {{ movie.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "@/type";
import { useRouter } from "vue-router";

const props = defineProps<{
  movie: Movie;
}>();

const router = useRouter();

const goToDetails = () =>
  router.push({
    name: "MovieDetails",
    params: { id: props.movie.id },
  });
</script>

<style scoped lang="scss">
.movie {
  display: flex;
  justify-content: space-between;
  font-family: Roboto, sans-serif;

  &__img-wrapper {
    width: 168px;
    min-height: 168px;
    background-color: #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    width: 112px;
  }
}

.description {
  width: 100%;
  padding-left: 24px;
  background-color: #2e2e2efa;

  &__title {
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
    padding-top: 32px;
    font-size: 36px;
    font-weight: 700px;
    color: #ffffff;
    cursor: pointer;
  }

  &__genres {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 700px;
    text-transform: uppercase;
    color: #988f8f;
  }

  &__directors {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 700px;
    text-transform: uppercase;
    color: #988f8f;
  }

  &__actors {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 12px;
    font-weight: 700px;
    color: #988f8f;
  }

  &__actors-label {
    font-weight: 700;
    color: #e5e5e5;
    white-space: nowrap;
    text-transform: uppercase;
  }

  &____actors-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 12px;
    line-height: 16px;
    text-transform: none;
  }

  &__description {
    font-size: 16px;
    font-weight: 400px;
    color: #ffffff;
    line-height: 20px;
    margin-bottom: 32px;
  }
}
</style>
