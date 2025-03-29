<template>
  <div class="control">
    <label class="control__radio-label">
      <img
        class="control__radio-image"
        :class="{
          'control__radio-image--active':
            moviesStore.selectedOption === 'title',
        }"
      />
      <input type="radio" value="title" v-model="moviesStore.selectedOption" />
      Отсортировать по названию
    </label>

    <label class="control__radio-label">
      <img
        class="control__radio-image"
        :class="{
          'control__radio-image--active': moviesStore.selectedOption === 'year',
        }"
      />
      <input type="radio" value="year" v-model="moviesStore.selectedOption" />
      Отсортировать по году
    </label>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from "@/stores/useMoviesStore";
const moviesStore = useMoviesStore();
</script>

<style scoped lang="scss">
.control {
  max-width: 475px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding-bottom: 16px;
  color: #c4c4c4;

  &__radio-label {
    display: flex;
    text-align: center;
    gap: 5px;
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
    background: url("../assets/logo/ic_check_box_active.svg") no-repeat center
      center;
  }
}
</style>
