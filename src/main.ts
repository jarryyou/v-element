import './assets/main.css'

import { createApp } from 'vue'
import Icon from './packages/Icon/index'
import Button from './packages/Button/index'
import App from './App.vue'

const app = createApp(App)

// app.component('Icon', Icon)
app.use(Icon)
app.use(Button)

app.mount('#app')
