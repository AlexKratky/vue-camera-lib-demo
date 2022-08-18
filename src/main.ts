import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import VueCameraLib from 'vue-camera-lib'

const app = createApp(App)

app.use(VueCameraLib)

app.mount('#app')