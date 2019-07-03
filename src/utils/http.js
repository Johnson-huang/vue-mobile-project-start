import Vue from 'vue';
import axios from 'axios';
import Cookie from 'js-cookie';
import store from '@src/store/index.js';
import router from '@src/router';
import { creditEndpoint } from '@src/config';

// just for debugger
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = '/api2';
}

const client = axios.create({
  baseURL: baseURL
});

// request 拦截器
client.interceptors.request.use(
  config => {
    config.headers['X-COML-MID'] = store.getters.subSource;
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// response 拦截器
client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const http = options => {
  options.url = creditEndpoint + options.url;
  options.timeout = 1000 * 60 * 10;

  if (process.env.NODE_ENV === 'development') {
    options.headers = {
      'x-coml-token': sessionStorage.getItem('__c0m1__pin')
    };
  }

  return new Promise(resolve => {
    client(options)
      .then(res => {
        switch (res.data.result) {
          case -99: // 未登录
            // 隐藏
            Vue.$vux.toast.hide();
            Vue.$vux.alert.hide();
            Vue.$vux.confirm.hide();
            Vue.$vux.loading.hide();

            // 清除 token
            Cookie.remove('__c0m1__pin');

            // 页面跳转
            const inspectId = +store.getters['check/inspectId'];
            const subSource = +store.getters.subSource;

            // 查他人
            if (inspectId) {
              router.push({ path: `/check/login?subSource=${subSource}&inspectId=${inspectId}` });
            } else { // 商业化
              router.push({ path: `/certification/elements?subSource=${subSource}` });
            }
            // toast 用户未登录
            Vue.$vux.toast.text(res.data.resultMessage, 'middle');
            resolve(res.data);
            break;
          default:
            resolve(res.data);
            break;
        }
      })
      .catch(err => {
        // 隐藏
        Vue.$vux.toast.hide();
        Vue.$vux.alert.hide();
        Vue.$vux.confirm.hide();
        Vue.$vux.loading.hide();

        // 错误 字符串
        const errStr = err + '';

        // 超时 error 捕获
        if (errStr.search('timeout') !== -1) {
          // toast 接口超时
          Vue.$vux.toast.text('接口超时', 'middle');
          return;
        }

        /* const codeMessage = {
          200: '服务器成功返回请求的数据。',
          201: '新建或修改数据成功。',
          202: '一个请求已经进入后台排队（异步任务）。',
          204: '删除数据成功。',
          400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
          401: '用户没有权限（令牌、用户名、密码错误）。',
          403: '用户得到授权，但是访问是被禁止的。',
          404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
          406: '请求的格式不可得。',
          410: '请求的资源被永久删除，且不会再得到的。',
          422: '当创建一个对象时，发生一个验证错误。',
          500: '服务器发生错误，请检查服务器。',
          502: '网关错误。',
          503: '服务不可用，服务器暂时过载或维护。',
          504: '网关超时。',
        }; */

        // 错误 http code 处理
        if (err.response && err.response.status !== 200) {
          Vue.$vux.toast.text('系统错误，请刷新重试', 'middle');
        }

        resolve();
      });
  });
};

export default http;
