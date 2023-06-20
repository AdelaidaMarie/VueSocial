import { createApp } from 'vue'
import './style.css'
import store from './store'
import App from './App.vue'
import router from './router/router'
import './styles/styles.scss'
createApp(App)
.use(store)
.use(router)
.mount('#app')
