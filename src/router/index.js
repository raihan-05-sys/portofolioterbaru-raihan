import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView 
    },
    { 
      path: '/portofolio', 
      name: 'portofolio', 
      component: () => import('../views/portofolio.vue') 
    },
    { 
      path: '/detail/:namaRepo', 
      name: 'detail', 
      component: () => import('../views/Detail.vue'), 
      props: true 
    }
  ]
})

export default router