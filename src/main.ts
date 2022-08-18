import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueCameraLib from 'vue-camera-lib'


const app = createApp(App)

app.use(VueCameraLib)

app.mount('#app')