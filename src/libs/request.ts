import axios from 'axios';
import { message } from 'ant-design-vue';


const createAxios = () => {
  const instance = axios.create({
    baseURL: '/api/',
  });

  instance.interceptors.response.use(v => {
    if (v.data.code !== 0) {
      message.error(v.data.msg || '未知错误');
    }
    return v;
  });

  return instance;
}


export default createAxios();
