import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/welcome',
    },
    {
      path: '/:id',
      name: 'page',
      props: true,
      component: () => import('@/views/PageView.vue'),
    },
  ],
});

export default router;
