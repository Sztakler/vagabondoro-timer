<script setup lang="ts">
import { Todo } from './types';

let props = defineProps({
  task: Todo,
  active: Boolean,
})


</script>

<template>
  <div class="container">
    <div v-if="props.active" class="active-indicator"></div>
    <img src="./assets/check.svg" @click="console.log(props.active)" />
    <div class="content">{{ task?.content }}</div>
    <div class="pomos">{{ task?.pomos }}/{{ task?.totalPomos }}</div>
    <img src="./assets/ellipsis-vertical.svg" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  padding: 0.7rem;
  gap: 0.7rem;
  margin-bottom: 0.7rem;
  align-items: center;
  justify-content: space-between;
  background-color: #DCD7BACC;
}

.active-indicator {
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: #1F1F28;
}
</style>
