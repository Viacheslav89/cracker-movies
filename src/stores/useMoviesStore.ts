import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Movie } from "@/type";

const moviesList = ref<Movie[] | null>(null);
const isLoading = ref<boolean | null>(null);
const selectedOption = ref("");

export const useMoviesStore = defineStore("movies", () => {
  const fetchMovies = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(
        "https://mashroom-movies-api.netlify.app/api/movies"
      );
      moviesList.value = response.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const getMoviesList = (selectedOption: string) => {
    if (!moviesList.value) return [];
    const sortedMovies = [...moviesList.value];
    switch (selectedOption) {
      case "title":
        return sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
      case "year":
        return sortedMovies.sort((a, b) => a.year - b.year);
      default:
        return sortedMovies;
    }
  };

  return { moviesList, isLoading, selectedOption, fetchMovies, getMoviesList };
});
