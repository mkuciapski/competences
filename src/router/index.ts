import { createRouter, createWebHistory } from 'vue-router'
import CompetencesView from '../views/CompetencesView.vue'
import TempView from '@/views/TempView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'competences',
      component: CompetencesView,
    },
    {
      path: '/temp',
      name: 'temp',
      component: TempView,
    },
  ],
})

export default router
