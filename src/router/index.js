import { createRouter, createWebHistory } from 'vue-router'
import routeHome from '@/components/route/routeHome.vue'
import routeLive from '@/components/route/routeLive.vue'
import routeStudio from '@/components/route/routeStudio.vue'
import routeLogin from '@/components/route/routeLogin.vue'
import store from '@/store';

const routes = [
  {path:'', name:'home', component:routeHome},
  {path:'/live/:liveid', name:'live', component:routeLive},
  {
    path:'/studio/:studioId', name:'studio', component:routeStudio,
    beforeEnter: async (to, from, next) => {
      await store.dispatch('login');
      next();
    }
  },
  {
    path:'/login', name:'login', component:routeLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
