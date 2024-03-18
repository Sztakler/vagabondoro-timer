<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue';
import { useTimer } from 'vue-timer-hook';

import Button from './Button.vue';
import StartButton from './StartButton.vue';
import TimeEstimation from './TimeEstimation.vue';

let i = ref(0);
const time = new Date();
time.setSeconds(time.getSeconds() + 6);
const timer = useTimer(time);
timer.pause();

function restartTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
  timer.restart(time);
}

function timerToggledCallback() {
  if (timer.isRunning.value) {
    timer.pause();
  } else timer.start();
}

onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      restartTimer();
      console.warn('IsExpired')
    }
  })
})
</script>

<template>
  <nav>
    <Button>Pomodoro</Button>
    <Button>Break</Button>
    <Button>Long break</Button>
  </nav>
  <div class="timer">
    <h1>{{ timer.minutes.value + ":" + timer.seconds.value
    }}</h1>
    <StartButton @timer-toggled="timerToggledCallback" />
    <TimeEstimation />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}

.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer>h1 {
  font-size: 6rem;
  font-weight: 600;
}

button {
  all: unset;
  font-size: 1rem;
  font-weight: 400;
  background-color: #DCD7BACC;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  width: 10ch;
  text-align: center;
  transition: scale 200ms ease;
}

button:hover {
  scale: 105%;
}
</style>
