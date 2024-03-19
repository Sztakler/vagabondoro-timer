<script setup lang="ts">
import { ref } from 'vue';

let props = defineProps({
  timerIsRunning: Boolean,
});

</script>

<template>
  <button class="start-button">
    {{ props!.timerIsRunning ? "Pause" : "Start" }}
  </button>
</template>

<style scoped>
.start-button {
  font-size: 1.7rem;
}
</style>
