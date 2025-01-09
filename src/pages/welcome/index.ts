import Color from 'color';

const page: Page = {
  cards: [
    {
      component: import('./1.vue').then((c) => c.default),
      size: {
        width: { min: 500 },
        height: { min: 500 },
        ratio: { width: 9, height: 16 },
        linesPerColumn: 36,
      },
    },
    {
      component: import('./2.vue').then((c) => c.default),
      size: {
        width: { min: 500 },
        height: { min: 500 },
        ratio: { width: 9, height: 16 },
        linesPerColumn: 36,
      },
    },
    {
      component: import('./3.vue').then((c) => c.default),
      size: {
        width: { min: 100 },
        height: { min: 100 },
        ratio: { width: 4, height: 3 },
        linesPerColumn: 36,
      },
    },
    {
      component: import('./4.vue').then((c) => c.default),
      size: {
        width: { min: 100 },
        height: { min: 100 },
        ratio: { width: 9, height: 14 },
        linesPerColumn: 36,
      },
    },
    {
      component: import('./5.vue').then((c) => c.default),
      size: {
        width: { min: 100 },
        height: { min: 100 },
        ratio: { width: 9, height: 14 },
        linesPerColumn: 36,
      },
    },
  ],
  background: '#220022',
  title: 'Welcome!',
};
export default page;
