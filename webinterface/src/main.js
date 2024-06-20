import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import VueAxios from 'vue-axios'
import App from './App.vue'
import MainMixin from './mixins/MainMixin'
import 'animate.css'


loadFonts()
const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.mixin(MainMixin)
app.use(router)
app.use(vuetify)
app.mount('#app')
