import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Movie } from "@/type";

const currentMovie = ref<Movie | null>(null);
const isLoading = ref<boolean | null>(null);

export const useMovieDetailsStore = defineStore("movie", () => {
  const fetchMovieDelails = async (id: number) => {
    isLoading.value = true;
    try {
      const response = await axios.get(
        `https://mashroom-movies-api.netlify.app/api/movie/${id}`
      );
      currentMovie.value = response.data.data;
      console.log(currentMovie.value);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { currentMovie, isLoading, fetchMovieDelails };
});
