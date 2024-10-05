import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
        path: '/digitals',
        name: 'digitals',
        component: () => import('../views/Digitals.vue'),
      },
  ]
})

export default router
