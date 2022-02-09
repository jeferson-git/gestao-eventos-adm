import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../pages/LoginPage.vue';
import DashboardPage from '../pages/DashboardPage.vue';
import EventList from '../components/eventos/EventList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    children: [{
      path: 'eventos',
      component: EventList
    }]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router