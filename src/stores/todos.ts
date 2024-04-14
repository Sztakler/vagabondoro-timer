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
      activeTaskIndex: -1,
    }
  },
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    changeActiveTask(id: String) {
      if (this.activeTaskIndex !== -1) 
        this.todos[this.activeTaskIndex].active = false;

      this.activeTaskIndex = this.todos.findIndex(todo => todo.id === id)

      if (this.activeTaskIndex !== -1) 
        this.todos[this.activeTaskIndex].active = true;
    },
    getActiveTaskId() {
      if (this.activeTaskIndex === -1) return;
      return this.todos[this.activeTaskIndex].id;
    },
    incrementPomodoroOnActiveTask() {
      if (this.activeTaskIndex === -1) return;
      console.log(typeof       this.todos[this.activeTaskIndex].pomos + 1)
      this.todos[this.activeTaskIndex].pomos += 1;
    },
    getActiveTaskRemainingPomos() {
      if (this.activeTaskIndex === -1) return 0;
      return this.todos[this.activeTaskIndex].totalPomos - this.todos[this.activeTaskIndex].pomos;
    },
    deleteTask(id: String) {
      if (this.activeTaskIndex !== -1)
        this.activeTaskIndex -= 1;
      this.todos = this.todos.filter(todo => todo.id !== id);
  }
  },
})

