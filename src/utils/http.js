//引入axios
import axios from 'axios';
import { Env } from "./env";

let cancel ,promiseArr = {};
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        // promiseArr[config.url]('操作取消');
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(error)
});

axios.defaults.baseURL = Env.baseURL;
axios.defaults.timeout = 600000;

export const Http = {
    //get请求
    get (url,params={}, headers={}) {
        headers['Content-Type'] = 'application/json';
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['Api-key'] = Env.apiKey;

        // console.log(url, params, headers);
        return new Promise((resolve,reject) => {
            axios({
                method: 'get',
                url,
                params: params,
                headers: headers,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log('Error', url, params, headers, err.response);
                reject(err)
            })
        })
    },
    //post请求
    post (url, params={}, headers={}) {

        headers['Content-Type'] = 'application/json';
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['Api-key'] = Env.apiKey;

        return new Promise((resolve,reject) => {
            axios({
                method: 'post',
                url,
                data: params,
                headers: headers,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log('Error', url, params, headers, err.response);
                reject(err)
            })
        })
    },
    //post请求
    put (url, params={}, headers={}) {

        headers['Content-Type'] = 'application/json';
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['Api-key'] = Env.apiKey;

        return new Promise((resolve,reject) => {
            axios({
                method: 'put',
                url,
                data: params,
                headers: headers,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log('Error', url, params, headers, err.response);
                reject(err)
            })
        })
    },
    //post请求
    delete (url, params={}, headers={}) {

        headers['Content-Type'] = 'application/json';
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['Api-key'] = Env.apiKey;

        return new Promise((resolve,reject) => {
            axios({
                method: 'delete',
                url,
                data: params,
                headers: headers,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log('Error', url, params, headers, err.response);
                reject(err)
            })
        })
    },
}