import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../pages/LoginPage.vue';
import DashboardPage from '../pages/DashboardPage.vue';

import EventList from '../components/eventos/EventList.vue'
import EventCreate from '../components/eventos/EventCreate.vue'

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
    children: [
      {
        path: 'eventos',
        component: EventList
      },
      {
        path: 'adicionar-evento',
        component: EventCreate
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router