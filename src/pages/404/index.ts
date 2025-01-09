import Color from 'color';

const page: Page = {
  cards: [
    {
      component: import('./1.vue').then((c) => c.default),
      size: {
        width: { min: 100 },
        height: { min: 100 },
        ratio: { width: 1, height: 1 },
        linesPerColumn: 24,
      },
    },
  ],
  background: new Color('#000'),
  title: '404 Not Found',
};
export default page;
