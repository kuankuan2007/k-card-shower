<template>
  <div class="root" ref="root">
    <div
      class="space"
      :style="{
        ...(util.objectMap(globalVars, (key, value) => ({
          key: util.camelCase2CssVariable(key as string),
          value,
        })) as any),
        'scroll-snap-stop': page?.canJumpPage ? 'normal' : 'always',
      }"
    >
      <div class="scroll-space">
        <div class="show-space">
          <div class="page-shower">
            <PageBackground
              class="page-background"
              :background="page?.background"
              v-if="page?.background"
            />
            <div class="card-list-area">
              <div class="card-area">
                <div
                  class="card-area-item"
                  v-for="(card, index) in cards"
                  :style="{
                    '--card-index': index,
                    'pointer-events': index === globalVars.activeCard ? 'auto' : 'none',
                  }"
                >
                  <CardArea :card="card" v-if="card" />
                </div>
              </div>
            </div>
            <div class="card-index" v-if="!page?.hideCurrentCard">
              第{{ globalVars.activeCard + 1 }}页/共{{ globalVars.cardNum }}页
            </div>
          </div>
        </div>
        <div class="scroll-snap-item first"></div>
        <div class="scroll-snap-item" v-for="card in (page?.cards?.length || 1) - 1"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import pageConfig from '@/shower/pages';
import * as util from '@/util';
import PageBackground from '@/components/PageBackground.vue';
import CardArea from '@/components/CardArea.vue';
const rootDiv = useTemplateRef<HTMLDivElement>('root');

const props = defineProps<{
  id: string;
}>();
const globalVars = reactive({
  windowWidth: computed(() => util.windowSize.width - 1),
  windowHeight: computed(() => util.windowSize.height - 1),
  cardNum: computed(() => page.value?.cards?.length || 0),
  scrollX: 0,
  scrollY: 0,
  activeCard: computed(function (): number {
    return Math.round(globalVars.scrollY);
  }),
  'padding-top': computed(() => page.value?.padding?.top || '2rem'),
  'padding-bottom': computed(() => page.value?.padding?.bottom || '5rem'),
  'padding-left': computed(() => page.value?.padding?.left || '1rem'),
  'padding-right': computed(() => page.value?.padding?.right || '1rem'),
});

const page = ref<Optional<AllAwaited<Page>>>();
watchEffect(async () => {
  page.value = {};
  const config = pageConfig.pageList[props.id] || pageConfig.pageList['404'];
  await util.awaitAll(config(props.id), page.value);
});

const cards = ref<(AllAwaited<Card> | undefined)[]>([]);
watchEffect(() => {
  if (!page.value?.cards) return;
  cards.value = [];
  for (const i in page.value.cards) {
    cards.value[i] = void 0;
    const target = {} as AllAwaited<Card>;
    util.awaitAll(page.value.cards[i], target).then(() => {
      cards.value[i] = shallowReactive(target);
    });
  }
});
watchEffect(() => {
  const title = page.value?.title || 'k-card-shower';
  document.title = title;
});

onMounted(() => {
  rootDiv.value?.addEventListener('scroll', () => {
    globalVars.scrollX = util.round((rootDiv.value?.scrollLeft || 0) / globalVars.windowWidth);
    globalVars.scrollY = util.round((rootDiv.value?.scrollTop || 0) / globalVars.windowHeight);
  });
});
</script>
<style scoped lang="scss">
.root {
  overflow: hidden scroll;
  position: fixed;
  width: 100%;
  height: 100%;
  scroll-snap-type: both mandatory;
}
.space {
  height: calc(var(--window-height) * var(--card-num) * 1px);
}
.scroll-space {
  height: 100%;
  position: relative;
}
.show-space {
  z-index: 1;
  position: sticky;
  top: 0;
}
.show-space,
.scroll-snap-item {
  height: calc(var(--window-height) * 1px);
}
.scroll-snap-item {
  scroll-snap-align: center;
}
.scroll-snap-item.first {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.page-shower {
  position: relative;
  width: 100%;
  height: 100%;
  .page-background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .card-list-area {
    height: calc(100% - var(--padding-top) - var(--padding-bottom));
    width: calc(100% - var(--padding-left) - var(--padding-right));
    left: var(--padding-left);
    top: var(--padding-top);
    position: absolute;
    z-index: 1;
    .card-area {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .card-index {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 5;
    white-space: nowrap;
  }
}
.card-area-item {
  position: absolute;
  width: 100%;
  height: 100%;
  --gap: calc(var(--card-index) - var(--scroll-y));
  transform: translate3d(0, calc(var(--gap) * 50%), 0) rotateZ(calc(var(--gap) * 30deg));
  perspective: 20vw;
  opacity: clamp(0, calc(1 - max(var(--gap), -1 * var(--gap))), 1);
}
</style>
