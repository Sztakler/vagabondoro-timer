<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

import Timer from './Timer.vue';
import Tasks from './Tasks.vue';

const isHighScreen = useMediaQuery('(min-height: 440px)');
</script>

<template>
  <div class="container border-radius-container">
    <Timer />
    <Tasks v-if="isHighScreen" />
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
  width: 60vw;
  max-width: 400px;
}

@media screen and (max-width: 600px) {
  .container {
    width: 100vw;
  }
}

@media screen and (max-height: 520px) {
  .container {
    gap: 0;
  }
}
</style>
