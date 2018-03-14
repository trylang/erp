// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import * as api from './api/api'
import * as filter from './utils/filter'
import store from './store'

// Vue.prototype.$api = api;
Vue.use(ElementUI);

Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render:h => h(App)
});