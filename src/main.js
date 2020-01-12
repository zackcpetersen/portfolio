import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
