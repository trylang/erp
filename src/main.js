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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//token添加
axios.interceptors.request.use(config=>{
  let token = window.localStorage.getItem('erp_token');
//   let token = 'c1eb8fde2c344556b73211f6344c98cd'; // 杜鑫token
  if(config.url == '/sys/user/login') {
      config.headers['token'] = null;
  }else{
      config.headers['token'] = token;
  }
  if (config.url.indexOf('/refund/task/download')>=0) {
    config.responseType='blob'
  }
  return config;
})

axios.interceptors.response.use(res=>{
  if (res.data.status==10010) {
    router.push('/login')
  }else {
    return res
  }
}, err=>{
  if (err.response.status==401) {
    router.push('/login')
  }else if (err.response.status==500) {
    Vue.prototype.errMsg = err.response;
    instance.$message.error('系统异常，请稍后再试');
    return Promise.reject(err);
  }else {
    Vue.prototype.errMsg = err.response;
    return Promise.reject(err);
  }
})

Vue.prototype.$downLoadUrl = axios.defaults.baseURL;
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
    if(!StartDate){
        this.$message.error('请选择开始日期');
        return '0个月0天';
    }
    if(!EndDate){
        return '0个月0天';
    }
    //计算相隔约月天
    let dates;
    let date1 = StartDate.split('-');
    let date2 = EndDate.split('-');
    let year_month = (parseInt(date2[0])-parseInt(date1[0]))*12;
    let months = parseInt(date2[1])-parseInt(date1[1]);
    let total_month = year_month+months;
    if(date2[1] == 2) {
        if (date2[2] == 28 && date1[2] == 31) {
            dates = parseInt(date2[2]) - parseInt(date1[2]) + 3;
        } else if (date2[2] == 28 && date1[2] == 30 || date2[2] == 29 && date1[2] == 31) {
            dates = parseInt(date2[2]) - parseInt(date1[2]) + 2;
        }else{
            dates = parseInt(date2[2])-parseInt(date1[2])+1;
        }
    }else{
        dates = parseInt(date2[2])-parseInt(date1[2])+1;
    }
    //计算月份最后一天
    let new_year = date2[0];
    let new_month = date2[1]++;
    if(date2[1]>12){
        new_month -=12;    //月份减
        new_year++;      //年份增
    }
    let new_date = new Date(new_year,new_month,1);        //取当年当月中的第一天
    let lastDay = new Date(new_date.getTime()-1000*60*60*24).getDate();//获取当月最后一天日期

    let datesNum = dates%lastDay;
    if(dates < 0) {
        total_month--;
        let temp = new Date(parseInt(date2[0]), parseInt(date2[1]) - 1, 0);
        let days = temp.getDate() + dates + 1;
        return total_month+"个月"+ days +"天"
    }else{
        if(datesNum == 0 && dates == lastDay || datesNum == 0 && dates == lastDay){
            dates = 0;
            return (total_month+1)+"个月"+ dates +"天"
        }else {
            return total_month + "个月" + dates + "天"
        }
    }
};
Vue.prototype.$dateNumber = dateNumber;

const limitNum = function (el) {
    var input = el;
    input.onkeyup = function (e) {
        if(input.value.length==1){
            input.value = input.value.replace(/[^0-9.]/g,'');
        }else{
            input.value = input.value.replace(/[^\d.]/g,'');
        }
    };
};
Vue.directive('limitNum', limitNum);

var instance = new Vue({
    el: '#app',
    router,
    store,
    render:h => h(App),
    data: {
        eventEmit: new Vue(),
        menus:[]
    },
    watch:{
        '$route'(to,from){
            const userInfo = localStorage.getItem('erp_userinfo');
            Vue.prototype.$userInfo = JSON.parse(userInfo);
        }
    }
});