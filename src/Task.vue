<script setup lang="ts">
import { Todo } from './types';

import { useTodosStore } from './stores/todos';
const todosStore = useTodosStore();

let props = defineProps({
  task: Todo,
  active: Boolean,
})


</script>

<template>
  <div class="container">
    <div v-if="props.active" class="active-indicator"></div>
    <img src="./assets/check.svg" :class="{ 'not-completed': !task!.completed }"
      @click.stop="task!.completed = !task!.completed" />
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
  transition: scale 100ms ease;
}

.container:hover {
  scale: 105%;
}


.not-completed {
  opacity: 40%;
}

.active-indicator {
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: #1F1F28;
}
</style>
