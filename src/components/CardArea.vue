<template>
  <div
    class="card-scale-area"
    v-on-resize="(entry) => resizeHandler(entry.contentRect)"
    ref="rootArea"
  >
    <div
      class="gap"
      :style="{
        '--width': cardSizeCalcResult.width + 'px',
        '--height': cardSizeCalcResult.height + 'px',
        'font-size': cardSizeCalcResult.fontsize,
      }"
    >
      <component :is="card.component" class="card-box" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { legacyCardSizeCalc } from '@/cardSizeCalc';
import vOnResize from '@/command/resize';
const rootArea = useTemplateRef<HTMLDivElement>('root');
const props = defineProps<{
  card: AllAwaited<Card>;
}>();

const size = reactive({ width: 0, height: 0 });
const cardSizeCalcResult = shallowRef<CardSizeCalcResult>({ width: 0, height: 0 });

function resizeHandler(cr: DOMRectReadOnly) {
  size.height = cr.height;
  size.width = cr.width;
}
watchEffect(() => {
  size.height;
  size.width;
  props.card.size;
  if (typeof props.card.size === 'function') {
    cardSizeCalcResult.value = props.card.size(size, props.card);
  } else {
    cardSizeCalcResult.value = legacyCardSizeCalc(size, props.card);
  }
});
onMounted(() => {
  if (!rootArea.value) return;
  resizeHandler(rootArea.value.getBoundingClientRect());
});
</script>
<style scoped lang="scss">
.card-scale-area,
.card-box {
  position: relative;
  width: 100%;
  height: 100%;
}
.gap {
  position: absolute;
  width: var(--width);
  height: var(--height);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
