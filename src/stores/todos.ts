import {defineStore} from "pinia";
import { Todo } from "../types";


export const useTodosStore = defineStore("todos", {
  state: () => {
    return { 
      todos: [
  new Todo("Water plants", 1),
  new Todo("Excercise a bit", 2),
  new Todo("Do homework", 4),
  new Todo("Read a book", 6),      
    ],
      activeTaskIndex: 0,
    }
  },
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    changeActiveTask(id: String) {
      this.todos[this.activeTaskIndex].active = false;
      this.activeTaskIndex = this.todos.findIndex(todo => todo.id === id);
      this.todos[this.activeTaskIndex].active = true;
    },
    getActiveTaskId() {
      console.log(this.todos[this.activeTaskIndex].id)
      return this.todos[this.activeTaskIndex].id;
    },
    incrementPomodoroOnActiveTask() {
      this.todos[this.activeTaskIndex].pomos += 1;
    },
    getActiveTaskRemainingPomos() {
      return this.todos[this.activeTaskIndex].totalPomos - this.todos[this.activeTaskIndex].pomos;
    },
    deleteTask(id: String) {
      this.todos = this.todos.filter(todo => todo.id !== id);
  }
  },
})

