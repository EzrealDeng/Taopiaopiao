// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui';
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import LazyLoad from './components/lazyLoad.js'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(Mint);
Vue.use(LazyLoad);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
