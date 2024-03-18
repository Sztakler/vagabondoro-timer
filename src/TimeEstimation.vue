<script setup lang="ts">
import { computed } from 'vue';

let props = defineProps(["i"])

let remaining = 67 * 60 * 1000;

let estimatedTime = computed(() => {
  let current = new Date();

  current.setTime(current.getTime() + remaining);
  return current.getHours() + ":" + current.getMinutes();

})
let approxHours = computed(() => {
  let hours = remaining / (1000 * 60 * 60)
  return hours.toFixed();
})
</script>

<template>
  <div>
    Task finish at: {{ estimatedTime }} ({{ approxHours }}h) {{ props.i }}
  </div>
</template>

<style scoped></style>
