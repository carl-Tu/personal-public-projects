import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
    },
    {
      path: '/websites',
      name: 'websites',
      component: () => import('../views/Websites.vue'),
    },
  ],
})

export default router
