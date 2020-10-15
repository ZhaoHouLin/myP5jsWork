import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Navbar from './components/Navbar.vue'
import Background from './components/Background.vue'

Vue.component('Navbar', Navbar)
Vue.component('Background', Background)

Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
