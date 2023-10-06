import { createRouter, createWebHistory } from 'vue-router'
import ChartCompositionApi from '../components/ChartCompositionApi.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/chart-composition-api',
      component: ChartCompositionApi,
    },
  ]
})

export default router
