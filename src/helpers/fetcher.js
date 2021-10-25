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

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  }, 
  (error) => {
    if(error.response.data.message.includes('token is expired')) {
      return refreshTokenFetcher();
    }
    
    return Promise.reject(error);
  }
);

const refreshTokenFetcher = (originalRequest) => {
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
      localStorage.setItem('refresh_token', res.data.payload.refresh_token);
      
      toast.success('Token refreshed!');
      window.location.reload();
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