// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';
import store from './store/index';
import VueLazyLoad from 'vue-lazyload';
import 'babel-polyfill';
import api from './http/index';
import 'common/stylus/index.styl';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import vueTap from 'v-tap';

Vue.use(vueTap);
Vue.use(MintUI);
Vue.use(api);
Vue.use(VueResource);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1,
  listenEvents: ['scroll']
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
