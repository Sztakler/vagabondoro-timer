<script setup lang="ts">
import { ref } from 'vue';
import Task from './Task.vue'
import { Todo } from './types'



let todos = ref([
  new Todo("Water plants", 1),
  new Todo("Excercise a bit", 2),
  new Todo("Do homework", 4),
  new Todo("Read a book", 3),
])

todos.value[2].completed = true;

let visibleTodos = ref(todos);

let activeTask = ref(todos.value[2].id)
let completedHidden = ref(false);

function addTask() {
  let newTodo = new Todo("...", 0)
  todos.value.push(newTodo)
  console.log(todos)
}

function hideCompleted() {
  completedHidden.value = !completedHidden.value;
}
</script>

<template>
  <main>
    <h2>Tasks</h2>
    <button @click="hideCompleted" class="hide-completed-button">
      <img v-if="completedHidden" src="./assets/eye-off.svg" />
      <img v-else src="./assets/eye.svg" />
      Hide completed
    </button>
    <div class="task-list">
      <div v-for="( item, index ) in todos">
        <Task v-if="!completedHidden || !item.completed" :task="item" :index="index" :key="item.id"
          :active="activeTask == item.id">
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
</style>
