import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './index.css'
import { plugin, defaultConfig } from '@formkit/vue'

const pinia = createPinia()

createApp(App).use(createPinia()).use(plugin, defaultConfig).mount('#app')