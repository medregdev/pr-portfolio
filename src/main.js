import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import Countup from 'vue-countup-v3'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './routes.js'
AOS.init({ duration: 1000 })
createApp(App).use(router).component('Icon', Icon).component('Countup', Countup).mount('#app')
