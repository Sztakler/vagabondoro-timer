<script setup lang="ts">
import { Todo } from './types';

let props = defineProps({
  task: Todo,
  active: Boolean,
})

</script>

<template>
  <div class="container">
    <div class="left">
      <div v-if="props.active" class="active-indicator"></div>
      <button><img src="./assets/check.svg" :class="{ 'not-completed': !task!.completed }"
          @click.stop="task!.completed = !task!.completed" /></button>
      <input class="content" v-model.lazy="task!.content" placeholder="Enter your task" />
    </div>
    <div class="right">
      <div class="pomo-inputs">
        <input class="pomos" pattern="\d+" v-model.lazy.number="task!.pomos" @click.stop="" />
        /
        <input class="pomos" pattern="\d+" v-model.lazy.number="task!.totalPomos" @click.stop="" />
      </div>
      <button><img src="./assets/trash.svg" class="delete-button" @click.stop="$emit('task-delete', task!.id)" /></button>
    </div>
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

.container>.left,
.right {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  min-width: 7rem;
}

.container>.left {
  justify-content: flex-start;
}

.container>.right {
  justify-content: flex-end;
}

button {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  filter: invert(29%) sepia(17%) saturate(587%) hue-rotate(201deg) brightness(96%) contrast(90%);
}

.not-completed {
  filter: invert(76%) sepia(4%) saturate(898%) hue-rotate(202deg) brightness(89%) contrast(89%);
}

.active-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: #1F1F28;
}

input {
  max-width: 30%;
  all: unset;
  padding: 0.2rem;
  font-size: 1rem;
  border-radius: 5px;
  text-justify: center;
}

input:invalid {
  text-decoration-color: #C34034;
  text-decoration-line: underline;
  text-decoration-style: wavy;
}

.content {
  display: inline-block;
  width: fit-content;
}

.pomos {
  font-family: "Ubuntu Mono";
  font-size: 1rem;
  max-width: 2ch;
  text-align: center;
}

.delete-button {
  scale: 80%;
}

@media screen and (max-width: 440px) {
  .container {
    justify-content: center;
    align-items: center;
    margin: 0 1rem 1rem 1rem;
  }

  input {
    font-size: 0.8rem;
  }


  button {
    scale: 80%;
  }


}
</style>
