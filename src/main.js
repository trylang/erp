// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
//import * as api from './api/api'
import * as filter from './utils/filter'
import store from './store'

import api from './api/apilist'
axios.defaults.baseURL = '/api';
Vue.prototype.$api = api;
Vue.use(ElementUI);

Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
})

/* eslint-disable no-new */
const delay = (function() {
    let timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
Vue.prototype.$delay = delay;
new Vue({
    el: '#app',
    router,
    store,
    render:h => h(App),
    data: {
        eventEmit: new Vue()
    }
});