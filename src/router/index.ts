import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/layout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
