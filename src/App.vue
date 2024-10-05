<template>
  <div id="container">
    <NavigationBar />
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import './style.css';
import NavigationBar from './components/NavigationBar.vue';
</script>

<style scoped>
#container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: var(--background-color);
}
</style>
