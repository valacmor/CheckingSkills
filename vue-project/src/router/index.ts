import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatsView from '../views/StatsView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/stats', name: 'Stats', component: StatsView },
  { path: '/settings', name: 'Settings', component: SettingsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router