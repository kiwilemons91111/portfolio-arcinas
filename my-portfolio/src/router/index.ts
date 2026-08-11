import { createRouter, createWebHistory } from 'vue-router'
// Make sure this matches your exact filename (HomeView.vue or Home.vue)
import HomeView from '@/views/Home.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router