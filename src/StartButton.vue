<script setup lang="ts">
import { emit } from '@tauri-apps/api/event';
import { ref } from 'vue';

const emit = defineEmits(['timerToggled'])

let isRunning = ref(false);

function toggleIsRunning() {
  isRunning.value = !isRunning.value
  emit('timerToggled')
}
</script>

<template>
  <button class="start-button" @click="toggleIsRunning">
    {{ isRunning ? "Pause" : "Start" }}
  </button>
</template>

<style scoped>
.start-button {
  font-size: 1.7rem;
}
</style>
