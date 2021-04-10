import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'

if (import.meta.env.MODE === 'development') {
  const { mockXHR } = await import('../mock/index.js')
  mockXHR()
}

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
