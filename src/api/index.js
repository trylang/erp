import axios from 'axios'
import qs from 'qs'

let cancel;
let promiseArr = {};
const CancelToken = axios.CancelToken;
//axios.defaults.baseURL = process.env.API_ROOT;
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
//请求时拦截
axios.interceptors.request.use(config=>{
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
},error=>{
    return Promise.reject(error)
});
//响应时拦截
axios.interceptors.response.use(res=>{
    return res.data
},err=>{
    return Promise.resolve(err.response)
});

export default{
    get(url,param){
        return new Promise((resolve,reject) => {
            axios({
                method:'get',
                url,
                params:qs.stringify(param),
                cancelToken:new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url,param){
        return new Promise((resolve,reject) => {
            axios({
                method:'post',
                url,
                data:qs.stringify(param),
                cancelToken:new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    delete(url,param){
        return new Promise((resolve,reject) => {
            axios({
                method:'delete',
                url,
                params:qs.stringify(param),
                cancelToken:new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    put(url,param){
        return new Promise((resolve,reject) => {
            axios({
                method:'put',
                url,
                data:qs.stringify(param),
                cancelToken:new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    patch(url,param){
        return new Promise((resolve,reject) => {
            axios({
                method:'patch',
                url,
                data:qs.stringify(param),
                cancelToken:new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}