<script setup lang="ts">
const props = defineProps({
  active: Boolean,
})
</script>

<template>
  <button :class="{ active: active }">
    <slot />
  </button>
</template>

<style scoped>
.active {
  transition: background-color 200ms ease;
  background-color: #a4a38fCC;
}
</style>
