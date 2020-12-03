import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/Layout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "uniq" */ '@/views/Uniq.vue'),
      },
      {
        path: 'character-type',
        name: 'CharacterType',
        component: () => import(/* webpackChunkName: "characterType" */ '@/views/CharacterType.vue'),
      },
      {
        path: 'compare',
        name: 'Compare',
        component: () => import(/* webpackChunkName: "compare" */ '@/views/Compare.vue'),
      },
      {
        path: 'sku',
        name: 'Sku',
        component: () => import(/* webpackChunkName: "sku" */ '@/views/Sku.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
