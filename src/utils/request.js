import axios from 'axios';
import { $message } from './notice';
const service = axios.create({
  baseURL: process.env.API_ROOT,
  // baseURL: '/api',
  timeout: 15000
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(response => {
  const res = response.data;  
  if (res.code === 2000) {
    return res.data;
  }
  else {
    if(res.message) {
      $message('error', res.message, 5 * 1000);
    }
    return Promise.reject(res);
  }
}, error => {
  if(error.message) {
    $message('error', error.message, 5 * 1000);
  } 
  return Promise.reject(error);
});

export default service;