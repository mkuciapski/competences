import { createRouter, createWebHistory } from 'vue-router'
import CompetencesView from '../views/CompetencesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'competences',
      component: CompetencesView,
    },
  ],
})

export default router
