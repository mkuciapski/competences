<script setup lang="ts">
import '@/assets/main.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Competences</RouterLink> |
      <RouterLink to="/temp">Temp</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
