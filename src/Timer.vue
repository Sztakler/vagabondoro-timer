<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue';
import { useTimer } from 'vue-timer-hook';
import JSConfetti from "js-confetti";

import Button from './Button.vue';
import StartButton from './StartButton.vue';
import TimeEstimation from './TimeEstimation.vue';

import { TimerModes, TimerSettings, } from './types.js'

import { useTodosStore } from './stores/todos';
const todosStore = useTodosStore();

const audio = new Audio('src/assets/notification.mp3');
audio.load();

let timerSettings = ref(new TimerSettings(20, 5, 10));
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

const jsConfetti = new JSConfetti();
const time = new Date();
time.setSeconds(time.getSeconds() + timerSettings.value.getModeTime(timerSchedule.value[currentMode.value]));
const timer = useTimer(time.getTime());
timer.pause();

function restartTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timerSettings.value.getModeTime(timerSchedule.value[currentMode.value]));
  timer.restart(time.getTime());
  audio.play();
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

function playSound() {
  audio.play()
}

onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      if (timerSchedule.value[currentMode.value] === TimerModes.Pomodoro) {
        todosStore.incrementPomodoroOnActiveTask();
      }
      // playSound();
      jsConfetti.addConfetti();
      timerScheduleAdvance();
      restartTimer();
    }
  })
})

function getFormattedTimerValue(timer_value: Number): String {
  let timer_string_value: String = String(timer_value);
  if (timer_string_value.length == 1) {
    timer_string_value = '0' + timer_string_value;
  }

  return timer_string_value;
}
</script>

<template>
  <div class="timer">
    <nav>
      <Button :active="timerSchedule[currentMode] === TimerModes.Pomodoro"
        @click="timerScheduleAdvanceToNext(TimerModes.Pomodoro)">Pomodoro</Button>
      <Button :active="timerSchedule[currentMode] === TimerModes.Break"
        @click="timerScheduleAdvanceToNext(TimerModes.Break)">Break</Button>
      <Button :active="timerSchedule[currentMode] === TimerModes.LongBreak"
        @click="timerScheduleAdvanceToNext(TimerModes.LongBreak)">Long break</Button>
    </nav>
    <h1>{{ getFormattedTimerValue(timer.minutes.value) + ":" + getFormattedTimerValue(timer.seconds.value)
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
  width: 100%;
}

.timer>h1 {
  font-size: 6rem;
  font-weight: 600;
  margin: 0;
  padding: 4rem;
}

button {
  all: unset;
  font-size: 1.2rem;
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

@media screen and (max-height: 650px) {
  .timer>h1 {
    padding: 2rem;
  }
}

@media screen and (max-height: 500px) {
  .timer>h1 {
    font-size: 8rem;
    padding: 4rem;
  }
}
</style>
