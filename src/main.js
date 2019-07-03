// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { TransferDom, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin } from 'vux';
import App from './App';
import router from './router';
import store from './store';
import plugin from './plugins';

Vue.config.productionTip = false;
// Vue.component('x-header', XHeader);
Vue.directive('transfer-dom', TransferDom);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
Vue.use(plugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
