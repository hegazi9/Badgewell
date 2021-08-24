/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { store } from '../redux/store';

let headers = {};
const API = axios.create({
  baseURL: 'https://task-interview-api-m64l5kfgkq-uc.a.run.app/api/',
  headers,
});

API.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const token = state.userState.user.token ;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


export default API;