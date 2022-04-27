

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import JokeView from '../views/JokeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friends',
    name: 'friend',
    component: FriendsView
  },
  {
    path:'/jokes',
    name: 'joke',
    component: JokeView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
