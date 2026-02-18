import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../Views/HomeViews.vue'
import AboutViews from '../Views/AboutViews.vue'
import NotFound from '../Views/NotFound.vue'
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
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router