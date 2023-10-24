import { createRouter, createWebHistory } from 'vue-router'
import Auth from "@/views/Auth.vue";
import Main from "@/views/Main.vue"
import Order from "@/views/Order.vue"
import Report from "@/views/Report.vue";
import Orders from "@/views/Orders.vue";
import Dashboard from "@/views/Dashboard.vue";
import Help from "@/views/Help.vue"

const routes = [
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/',
    component: Main
  },
  {
    path: "/help",
    component: Help
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/report',
    component: Report
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/tasks',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
