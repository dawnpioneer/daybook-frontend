import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  vuetify,
  components: { App }
})
