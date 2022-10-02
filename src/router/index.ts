import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      }, {
        path: '/icon',
        component: () => import('../views/icon/index.vue')
      }, {
        path: '/area',
        component: () => import('../views/area/index.vue')
      }, {
        path: '/trend',
        component: () => import('../views/trend/index.vue')
      }, {
        path: '/menu',
        component: () => import('../views/menu/index.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router