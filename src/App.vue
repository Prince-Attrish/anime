<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <main class="2xl:container mx-auto relative">
    <Navigation />
    <div>
      <RouterView />
    </div>
  </main>
</template>
