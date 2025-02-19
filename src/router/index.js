import { createRouter, createWebHistory } from 'vue-router'
import routeHome from '../components/route/routeHome.vue'
import routeLive from '../components/route/routeLive.vue'
import routeStudio from '../components/route/routeStudio.vue'

const routes = [
  {path:'', name:'home', component:routeHome},
  {path:'/live/:liveid', name:'live', component:routeLive},
  {path:'/studio/:studioId', name:'studio', component:routeStudio}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
