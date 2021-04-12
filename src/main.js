import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import '../mock/mock-serve'
import './permission'
import Icons from './icons'

createApp(App).use(store).use(router).use(ElementPlus).use(Icons).mount('#app')
