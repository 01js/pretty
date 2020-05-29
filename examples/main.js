import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { PYButton } from '../packages'

Vue.use(PYButton)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
