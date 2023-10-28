import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const customTheme = {
  dark: true,
  colors: {
    primary: '#619B9B',
    darkblue: '#232028',
    gray: '#2B2A31',
    lightgray: '#49454F',
    pink: '#5F3953',
    birch: '#456265',
  }
}

export default createVuetify({
  theme: {
    themes: {
      customTheme,
    },
    defaultTheme: 'customTheme',
  },
})
