import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/route.js'
import '@/assets/css/global.scss'
import 'virtual:windi.css'
import App from './App.vue'

createApp(App).use(ElementPlus).use(router).mount('#app')
