import Vue from 'vue'
import App from './App.vue'
import router from './router'
//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";


Vue.config.productionTip = false

Vue.use(BootstrapVue);
//hello world please work
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
