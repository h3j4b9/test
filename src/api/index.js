/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax';
const BASE_URL = 'http://localhost:4000';
// const BASE_URL = 'https://api.apiopen.top/singlePoetry';

export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST');

export const getData = () => ajax(BASE_URL);
