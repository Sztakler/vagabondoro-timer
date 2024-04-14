<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width: 400px)');

const props = defineProps({
  active: Boolean,
})

</script>


<template>
  <button :class="{ active: active }" v-if="!isSmallScreen || props.active">
    <slot />
  </button>
</template>

<style scoped>
.active {
  transition: background-color 200ms ease;
  background-color: #a4a38fCC;
}
</style>
