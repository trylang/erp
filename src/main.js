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
import 'jquery';

// import './sdk/js/ui/indoormap_control/dist/ui.floorcontrol.js';
console.log(window);

// console.log($);

axios.defaults.baseURL = process.env.API_ROOT;
Vue.prototype.$api = api;
Vue.prototype.HOST = process.env.API_ROOT;
Vue.use(ElementUI);

Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
});

/* eslint-disable no-new */
const delay = (function() {
    let timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
Vue.prototype.$delay = delay;
// Vue.prototype.Echarts = window.echarts;

const dateNumber = function(StartDate,EndDate){
    let date1 = StartDate.split('-');
    let date2 = EndDate.split('-');
    let year_month = (parseInt(date2[0])-parseInt(date1[0]))*12;
    let months = parseInt(date2[1])-parseInt(date1[1]);
    let total_month = year_month+months;
    let dates = parseInt(date2[2])-parseInt(date1[2]);
    if(dates < 0) {
        total_month--;
        let temp = new Date(parseInt(date2[0]), parseInt(date2[1]) - 1, 0);
        let days = temp.getDate() + dates;
        console.log(total_month,dates)
        return total_month+"����"+ days +"��"
    }else{
        return total_month+"����"+ dates +"��"
    }
};
Vue.prototype.$dateNumber = dateNumber;

new Vue({
    el: '#app',
    router,
    store,
    render:h => h(App),
    data: {
        eventEmit: new Vue()
    }
});