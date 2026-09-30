<template>
  <div :style="{ background: css }"></div>
</template>
<script setup lang="ts">
import type { ColorInstance } from 'color';

const props = defineProps<{
  background: string | ColorInstance;
}>();

const css = computed(() => {
  if (typeof props.background === 'string') {
    return props.background;
  } else {
    return props.background.toString();
  }
});
</script>
<style scoped lang="scss"></style>
