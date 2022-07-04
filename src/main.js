import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import './axios'

Vue.config.productionTip = false

const cors = require('cors');
// app.use(cors());

new Vue({
  router,
  store,
  vuetify,
  cors,

  render: h => h(App)
}).$mount('#app')
