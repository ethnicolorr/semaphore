import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {VBtn} from "vuetify/components";

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
  aliases: {
    VBtnCheck: VBtn,
  },
  // defaults: {
    // VBtn: {
    //   style:
    //     'background-color: #619B9B; ' +
    //     'color: white; ' +
    //     'text-transform: none;' +
    //     'font-size: 16pt'
    // },
  // },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
})
