import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../Views/HomeViews.vue'
import AboutViews from '../Views/AboutViews.vue'
import NotFound from '../Views/NotFound.vue'
import ServicePage from '@/Views/ServicePage.vue'
import PlayGame from '../Views/PlayGame.vue'
import ContactPage from '../Views/ContactPage.vue'
import DashBoard from '../Views/DashBoard.vue'
import SignupPage from '../Views/SignupPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViews
  },
 
  {
    path:'/SignupPage',
    name:'SignupPage',
    component:SignupPage
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:DashBoard
  },
  {
    path: '/about',
    name: 'About',
    component: AboutViews
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
  },
 
  
  {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router