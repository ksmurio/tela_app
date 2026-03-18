import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/pages/home.vue'),
    },
    {
        path: '/SoftwareDeGestao',
        component: () => import('@/pages/softwaredegestao.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;