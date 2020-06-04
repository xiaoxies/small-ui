import Vue from 'vue'
import App from './App.vue'
import smallUI from "../packages";


Vue.config.productionTip = false
Vue.use(smallUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
