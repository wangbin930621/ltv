require('es6-promise').polyfill(); // 引入一次就行
import axios from 'axios';

// 创建 axios 实例
const Axios = axios.create({
    baseURL: 'http://a.wapp.com:1323',
    timeout: 5000,
    
});

Axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            const formData = new FormData();
            Object.keys(config.data).forEach(key => formData.append(key, config.data[key]));
            config.data = formData;
        }
        if (config.url !="/login" && localStorage.token != undefined ){
            config.headers.Authorization = 'Bearer ' + localStorage.token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    res => {
        return Promise.resolve(res);
    },
    error => {
        return Promise.reject(error);
    }
);

// 将 Axios 实例添加到Vue的原型对象上
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$Axios', { value: Axios });
    }
};