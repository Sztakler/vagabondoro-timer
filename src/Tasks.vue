<script setup lang="ts">
import { ref } from 'vue';
import Task from './Task.vue'
import { Todo } from './types'

import { useTodosStore } from './stores/todos';
const todosStore = useTodosStore();

let completedHidden = ref(false);

function addTask() {
  let newTodo = new Todo("", 0)
  todosStore.addTodo(newTodo);
}

function hideCompleted() {
  completedHidden.value = !completedHidden.value;
}
</script>

<template>
  <main>
    <h2>Tasks</h2>
    <button @click="hideCompleted" class="hide-completed-button">
      <img v-if="completedHidden" class="hide-completed-icon" src="./assets/eye-off.svg" />
      <img v-else class="hide-completed-icon" src="./assets/eye.svg" />
      Hide completed
    </button>
    <div class="task-list">
      <div v-for="( item, index ) in todosStore.todos">
        <Task v-if="!completedHidden || !item.completed" @click="todosStore.changeActiveTask(item.id)" :task="item"
          :index="index" :key="item.id" :active="item.active" @taskDelete="(id) => todosStore.deleteTask(id)">
        </Task>
      </div>
    </div>
    <button class="add-task-button" @click="addTask()">
      <img src="./assets/plus.svg" />
    </button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

h2 {
  font-size: 1.7rem;
  font-weight: 400;
}

button {
  all: unset;
  align-self: self-end;
  font-weight: 400;
}

.task-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30vh;
  padding: 1rem;
  overflow-y: scroll;
}

.add-task-button {
  padding: 1rem;
  align-self: center;
  transition: scale 200ms ease;
}

.add-task-button:hover {
  scale: 115%;
}

.hide-completed-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem;
}

.hide-completed-icon {
  scale: 80%;
}

@media screen and (max-height: 600px) {
  .task-list {
    max-height: 50px;
  }

  main {}
}
</style>
