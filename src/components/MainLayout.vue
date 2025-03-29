<template>
  <div class="layout">
    <header class="layout__header">
      <h1 class="layout__title">#movienow</h1>
    </header>

    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout {
  background-color: #363232;
  min-height: 100vh;
  font-family: Roboto, sans-serif;

  &__header {
    background-color: #fa2828fa;
    height: 100px;
    box-shadow: 0 15px 15px rgb(39, 39, 39);
    margin-bottom: 40px;
  }

  &__title {
    margin: 0;
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    padding-top: 36px;
    line-height: 48px;
    letter-spacing: 9px;
  }

  &__content {
    margin: 0 auto;
    max-width: 1400px;
    padding: 0 10px;
  }
}
</style>
