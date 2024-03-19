<script setup lang="ts">
import { computed, ref } from 'vue';
import { TimerModes, TimerSettings } from './types';
import { useTodosStore } from './stores/todos';
const todosStore = useTodosStore();

let props = defineProps({
  schedule: Array<TimerModes>,
  currentMode: Number,
  timerSettings: TimerSettings,
})

let remainingTime = ref(0);

let estimatedTime = computed(() => {
  let remainingPomos = todosStore.getActiveTaskRemainingPomos();
  let i = props.currentMode!;
  remainingTime.value = 0;

  while (remainingPomos > 0) {
    if (props.schedule![i] === TimerModes.Pomodoro)
      remainingPomos -= 1;
    remainingTime.value += props.timerSettings?.getModeTime(props.schedule![i]) as number;
    i = (i + 1) % props.schedule!.length;
  }


  let current = new Date();

  console.log(current, remainingTime.value)
  current.setTime(current.getTime() + remainingTime.value * 1000);
  console.log(current)
  return current.getHours() + ":" + current.getMinutes();

})
let approxHours = computed(() => {
  let hours = remainingTime.value / (60 * 60)
  return hours.toFixed();
})


</script>

<template>
  <div>
    Task finish at: {{ estimatedTime }} ({{ approxHours }}h)
  </div>
</template>

<style scoped></style>
