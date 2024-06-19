import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'swiper/swiper-bundle.css';
import "swiper/css"

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')