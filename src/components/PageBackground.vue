<template>
  <component :is="BackgroundComponent" :background="background"></component>
</template>
<script setup lang="ts">
import Color from 'color';
import CssSettingBackground from './CssSettingBackground.vue';
const props = defineProps<{ background: PageBackground }>();
const BackgroundComponent = computed(() => {
  if (typeof props.background === 'string') {
    return CssSettingBackground;
  } else {
    if (props.background instanceof Color) {
      return CssSettingBackground;
    }
    return props.background;
  }
});
</script>
<style scoped lang="scss"></style>
