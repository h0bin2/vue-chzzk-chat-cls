import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/index.css'
import router from '@/router'
import store from '@/store'
import VueCookies from 'vue3-cookies'

createApp(App).use(router).use(store).use(VueCookies).mount('#app')
