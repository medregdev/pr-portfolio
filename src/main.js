import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import Countup from 'vue-countup-v3'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './routes.js'
import i18n from './i18n'
AOS.init({ duration: 1000 })
createApp(App)
  .use(router)
  .use(i18n)
  .component('Icon', Icon)
  .component('Countup', Countup)
  .mount('#app')
