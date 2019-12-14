import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#03f51b5',
        secondary: '#3a9f4',
        accent: '#00bcd4',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#8bc34a',
        success: '#4caf50'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
})
