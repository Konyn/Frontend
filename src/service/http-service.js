import axios from 'axios';
import { auth } from '@/stores';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

instance.interceptors.request.use((config) => {
  const store = auth();
  if (store.getUser !== null && store.getUser.token !== undefined) {
    config.headers['Authorization'] = 'Bearer ' + store.getUser.token;
  }

  return config;
});

export default instance;
