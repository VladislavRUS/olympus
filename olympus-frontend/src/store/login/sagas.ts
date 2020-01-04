import { all, call, fork, put, takeEvery, delay } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { onLoginError, onLoginSuccess } from './actions';
import { LoginActionTypes } from './types';
import { i18n } from '../../i18n';
import { replace } from 'connected-react-router';
import { Routes } from '../../constants/Routes';

function* handleLogin(action: any) {
  yield delay(500);

  try {
    const { data } = yield call(API.post, '/auth/login', {
      ...action.payload,
    });

    API.defaults.headers.Authorization = `Bearer ${data.access_token}`;
    localStorage.setItem('access_token', data.access_token);

    yield put(onLoginSuccess());
    yield put(replace(Routes.MAIN));
  } catch (error) {
    let errorMessage = '';

    if (error.response && error.response.status === 401) {
      errorMessage = i18n.t('home.login.error.invalidCredentials');
    }

    yield put(onLoginError(errorMessage));
  }
}

function* watchLoginRequest() {
  yield takeEvery(LoginActionTypes.LOGIN_REQUEST, handleLogin);
}

function* loginSaga() {
  yield all([fork(watchLoginRequest)]);
}

export { loginSaga };
