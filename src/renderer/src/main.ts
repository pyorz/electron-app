import './assets/main.less'

import '@dongls/xwindow/dist/index.css'
import { xWindow } from '@dongls/xwindow'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(xWindow)
app.mount('#app')
// createApp(App).mount('#app')
