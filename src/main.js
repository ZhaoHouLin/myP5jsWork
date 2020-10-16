import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Navbar from './components/Navbar.vue'
import Background from './components/Background.vue'
import LeftSection from './components/LeftSection.vue'
import RightSection from './components/RightSection.vue'

Vue.component('Navbar', Navbar)
Vue.component('Background', Background)
Vue.component('LeftSection', LeftSection)
Vue.component('RightSection', RightSection)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
