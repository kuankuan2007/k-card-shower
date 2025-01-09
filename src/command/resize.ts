import type { Directive } from 'vue';

const ob = new ResizeObserver((li) => {
  for (const i of li) {
    const handler = callBack.get(i.target);
    handler && handler(i);
  }
});
const callBack = new WeakMap();
const vOnResize: Directive<HTMLElement, (arg: ResizeObserverEntry) => void> = {
  mounted(el, binding) {
    ob.observe(el);
    callBack.set(el, binding.value);
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};
export default vOnResize;
