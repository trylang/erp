import axios from 'axios';
const LOCAL_ROOT = process.env.LOCAL_ROOT;

export function getPayMethods() {
  return axios.get(LOCAL_ROOT+'/static/local/pay_methods.json');
}
