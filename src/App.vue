<script setup lang="ts">
import Timer from './Timer.vue';
import Tasks from './Tasks.vue';
</script>

<template>
  <div class="container border-radius-container">
    <Timer />
    <Tasks />
  </div>
</template>

<style scoped>
.container {
  background-color: #FFFFFFCC;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
