import Vue from 'vue'
import App from './App'
import router from './router'

// mock the lightdm object
import './mock'

// Muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

// Material-icons
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
