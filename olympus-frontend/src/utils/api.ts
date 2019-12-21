import axios from 'axios';
import { replace } from 'connected-react-router';
import { Routes } from '../constants/Routes';
import { toast } from 'react-toastify';
import { i18n } from '../translations';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  responseType: 'json',
});

API.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!error.response) {
      toast.error(i18n.t('errors.networkError'));
    } else if (error.response && error.response.status === 401) {
      replace(Routes.HOME);
    }

    return Promise.reject(error);
  },
);

export { API };
