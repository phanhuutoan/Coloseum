import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import config from './config';

Vue.config.productionTip = false;

const axiosInstance = axios.create({
  baseURL: `http://${config.host}/api/`,
  timeout: 5000,
});

Vue.prototype.$axios = axiosInstance;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
