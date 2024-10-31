/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/history',
    component: HistoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
