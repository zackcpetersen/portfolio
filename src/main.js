import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
