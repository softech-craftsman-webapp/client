import axios from 'axios';
import browserFingerprint from 'browser-fingerprint';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { md5 } from './md5';
import toast from 'react-hot-toast';

const uid = md5(browserFingerprint());

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}`,
  timeout: 30 * 1000,
  headers: {
    'X-Request-ID': uid,
    'Accept': 'application/json'
  },
  responseType: 'json'
});

const refreshAuthLogic = failedRequest =>
    axios.get(`${process.env.REACT_APP_API_BASE}/auth/refresh`, {
      crossdomain: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
        'X-Request-ID': uid,
        'Accept': 'application/json'
      }
    })
    .then(
      tokenRefreshResponse => {
      localStorage.setItem('token', tokenRefreshResponse.data.payload.token);
      localStorage.setItem('refresh_token', tokenRefreshResponse.data.payload.refresh_token);
      failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.payload.token;
      
      return Promise.resolve();
    })
    .catch(error => {
      Promise.reject(error);
      toast.error('Something went wrong. Please log in again.');

      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_data');
      localStorage.removeItem('geo_data');

      return window.location.replace('/auth/sign-in');
    });

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);

const fetcher = (method, url, data) => {
  let headers = { };

  if (localStorage.getItem('token')) {
    headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
  }
  return axiosInstance({
    method,
    url,
    data,
    headers
  });
};

export default fetcher;