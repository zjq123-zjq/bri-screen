import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import BigScreen from '../views/BigScreen/index.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/big-screen'
    },
    {
      path: '/big-screen',
      name: '/big-screen',
      component: BigScreen
    }
  ]
})

export default router
