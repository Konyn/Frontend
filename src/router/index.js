import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login.vue';
import { auth } from '@/stores/index.js';
import Desktop from '@/views/dashboard/desktop .vue';
import Mobile from '@/views/mobile/mobile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard-desktop',
      name: 'dashboard-desktop',
      component: Desktop,
      beforeEnter(to, from, next) {
        const store = auth();
        if (store.getUser.token) next();
        else next('/login');
      }
    },
    {
      path: '/dashboard-mobile',
      name: 'dashboard-mobile',
      component: Mobile,
      beforeEnter(to, from, next) {
        const store = auth();
        if (store.getUser.token) next();
        else next('/login');
      }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/dashboard-desktop' },
  ]
});

export default router;
