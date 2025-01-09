<template>
  <div
    class="card-scale-area"
    v-on-resize="(entry) => resizeHandler(entry.contentRect)"
    ref="rootArea"
  >
    <div
      class="gap"
      :style="{
        '--width': cardSize.width + 'px',
        '--height': cardSize.height + 'px',
        'font-size': card.size.linesPerColumn && cardSize.height / card.size.linesPerColumn + 'px',
      }"
    >
      <component :is="card.component" class="card-box" />
    </div>
  </div>
</template>
<script setup lang="ts">
import vOnResize from '@/command/resize';
const rootArea = useTemplateRef<HTMLDivElement>('root');
const props = defineProps<{
  card: AllAwaited<Card>;
}>();

const size = reactive({ width: 0, height: 0 });
const cardSize = reactive({ width: 0, height: 0 });

function resizeHandler(cr: DOMRectReadOnly) {
  size.height = cr.height;
  size.width = cr.width;
}
watchEffect(() => {
  size.height;
  size.width;
  const ratio = props.card.size.ratio.height / props.card.size.ratio.width;
  const widthRange: NumberRange = {
    min: Math.min(
      props.card.size.width.min || Infinity,
      (props.card.size.height.min || Infinity) / ratio
    ),
    max: Math.max(props.card.size.width.max || 0, (props.card.size.height.max || 0) / ratio),
  };
  if (widthRange.min && widthRange.min !== Infinity && size.width < widthRange.min) {
    cardSize.width = widthRange.min;
  } else if (widthRange.max && size.width > widthRange.max) {
    cardSize.width = widthRange.max;
  } else {
    cardSize.width = Math.min(size.width, size.height / ratio);
  }
  cardSize.height = cardSize.width * ratio;
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
