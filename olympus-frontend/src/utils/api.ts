import axios from 'axios';
import { toast } from 'react-toastify';
import { i18n } from '../translations';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  responseType: 'json',
});

const accessToken = localStorage.getItem('access_token');

if (accessToken) {
  API.defaults.headers.Authorization = `Bearer ${accessToken}`;
}

API.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!error.response) {
      toast.error(i18n.t('errors.networkError'));
    } else if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }

    return Promise.reject(error);
  },
);

export { API };
