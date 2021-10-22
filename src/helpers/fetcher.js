import axios from 'axios';
import browserFingerprint from 'browser-fingerprint';
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

axiosInstance.interceptors.response.use((response) => {
  return response
}, function (error) {

  if (error.response.status === 500) {
    if(error.response.data.message.includes('invalid or expired jwt')) {
      return refreshTokenFetcher();
    }
  }

  return Promise.reject(error);
});


const refreshTokenFetcher = () => {
  const config = {
    crossdomain: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
      'X-Request-ID': uid,
      'Accept': 'application/json'
    }
  };

  axios.get(`${process.env.REACT_APP_API_BASE}/auth/refresh`, config)
    .then((res) => {
      localStorage.setItem('token', res.data.payload.token);
      toast.success('Token refreshed!');
    })
    // client error
    .catch((error) => {
      (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);
    });
}

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