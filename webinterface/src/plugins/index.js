/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {createAxios} from "./axios"
export function registerPlugins (app) {
  loadFonts()
  createAxios(app)
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
}