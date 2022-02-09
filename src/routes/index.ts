import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router