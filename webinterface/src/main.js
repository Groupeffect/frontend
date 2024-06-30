/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import MainMixin from './mixins/MainMixin'
import 'animate.css'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app)
app.mixin(MainMixin)
app.mount('#app')