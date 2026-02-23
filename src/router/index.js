import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../Views/HomeViews.vue'
import AboutViews from '../Views/AboutViews.vue'
import NotFound from '../Views/NotFound.vue'
import ServicePage from '@/Views/ServicePage.vue'
import PlayGame from '../Views/PlayGame.vue'
import ContactPage from '../Views/ContactPage.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViews
  },
  {
    path: '/about',
    name: 'About',
    component: AboutViews
  },
  {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:NotFound
  },
  {
    path:'/ServicePage',
    name:'ServisePage',
    component: ServicePage
  },
  {
    path:'/PlayGame',
    name:'PlayGame',
    component:PlayGame
  },
  {
    path:'/ContactPage',
    name:'ContactPage',
    component:ContactPage
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router