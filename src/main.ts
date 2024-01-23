import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Levels from '@/Views/Levels.vue'
import Stats from '@/Views/Stats.vue'
import Items from '@/Views/Items.vue'

const router = createRouter({
  history: createWebHistory('/scimitarrr/'),
    routes: [
      { path: '/', name: 'Home', component: Levels },
      { path: '/stats', name: 'Stats', component: Stats },
      { path: '/items', name: 'Items', component: Items }
  ],
  linkActiveClass: 'bg-gray-900'
})

createApp(App).use(router).mount('#app')
