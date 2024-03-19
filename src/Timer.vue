<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue';
import { useTimer } from 'vue-timer-hook';

import Button from './Button.vue';
import StartButton from './StartButton.vue';
import TimeEstimation from './TimeEstimation.vue';

import { TimerModes, TimerSettings, } from './types.js'

import { useTodosStore } from './stores/todos';
const todosStore = useTodosStore();

let timerSettings = ref(new TimerSettings(25, 5, 15));
let currentMode = ref(0);
let timerSchedule = ref([
  TimerModes.Pomodoro,
  TimerModes.Break,
  TimerModes.Pomodoro,
  TimerModes.Break,
  TimerModes.Pomodoro,
  TimerModes.Break,
  TimerModes.Pomodoro,
  TimerModes.LongBreak,
]);

const time = new Date();
time.setSeconds(time.getSeconds() + 6);
const timer = useTimer(time);
timer.pause();

function restartTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timerSettings.value.getModeTime(timerSchedule.value[currentMode.value]));
  timer.restart(time);
}

function timerToggledCallback() {
  if (timer.isRunning.value === true) {
    timer.pause();
  } else timer.resume();
}

function timerScheduleAdvance() {
  currentMode.value = (currentMode.value + 1) % timerSchedule.value.length;
}

function timerScheduleAdvanceToNext(timerMode: TimerModes) {
  while (timerSchedule.value[currentMode.value] !== timerMode) {
    timerScheduleAdvance();
  }
  restartTimer();
  timer.pause();
}

onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      if (timerSchedule.value[currentMode.value] === TimerModes.Pomodoro) {
        todosStore.incrementPomodoroOnActiveTask();
      }
      timerScheduleAdvance();
      restartTimer();
    }
  })
})
</script>

<template>
  <nav>
    <Button :active="timerSchedule[currentMode] === TimerModes.Pomodoro"
      @click="timerScheduleAdvanceToNext(TimerModes.Pomodoro)">Pomodoro</Button>
    <Button :active="timerSchedule[currentMode] === TimerModes.Break"
      @click="timerScheduleAdvanceToNext(TimerModes.Break)">Break</Button>
    <Button :active="timerSchedule[currentMode] === TimerModes.LongBreak"
      @click="timerScheduleAdvanceToNext(TimerModes.LongBreak)">Long break</Button>
  </nav>
  <div class="timer">
    <h1>{{ timer.minutes.value + ":" + timer.seconds.value
    }}</h1>
    <StartButton :timerIsRunning="timer.isRunning.value" @click="timerToggledCallback" />
    <TimeEstimation :schedule="timerSchedule" :currentMode="currentMode" :timerSettings="timerSettings" />
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
