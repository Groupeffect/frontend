// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: 'rgba(0, 0, 0, 0)',
    surface: 'rgba(0, 0, 0, 0)',
    'surface-bright': 'rgba(0, 0, 0, 0)',
    'surface-light': 'rgba(0, 0, 0, 0)',
    'surface-variant': 'rgba(0, 0, 0, 0)',
    'on-surface-variant': 'rgba(0, 0, 0, 0)',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': 'rgba(0, 0, 0, 0)',
    'theme-code': 'rgba(0, 0, 0, 0)',
    'theme-on-code': '#000000',
  }
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: myCustomDarkTheme
        // light: {
        //   primary: '#1976D2',
        //   secondary: '#424242',
        //   accent: '#82B1FF',
        //   error: '#FF5252',
        //   info: '#2196F3',
        //   success: '#4CAF50',
        //   warning: '#FFC107'
        // },
        // dark: {
        //   // primary: '#2196F3',
        //   // secondary: '#424242',
        //   // accent: '#82B1FF',
        //   // error: '#FF5252',
        //   // info: '#2196F3',
        //   // success: '#4CAF50',
        //   // warning: '#FFC107',
        //   colors: {
        //     background: 'rgba(0, 0, 0, 0)',
        //     surface: 'rgba(0, 0, 0, 0)',
        //     'surface-bright': 'rgba(0, 0, 0, 0)',
        //     'surface-light': 'rgba(0, 0, 0, 0)',
        //     'surface-variant': 'rgba(0, 0, 0, 0)',
        //     'on-surface-variant': 'rgba(0, 0, 0, 0)',
        //     primary: '#1867C0',
        //     'primary-darken-1': '#1F5592',
        //     secondary: '#48A9A6',
        //     'secondary-darken-1': '#018786',
        //     error: '#B00020',
        //     info: '#2196F3',
        //     success: '#4CAF50',
        //     warning: '#FB8C00',
        //   },
      }
    }
  }
)
