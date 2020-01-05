import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { LoginActionTypes } from './types';
import { i18n } from '../../i18n';
import { replace } from 'connected-react-router';
import { Routes } from '../../constants/Routes';
import { loginAsync, onLogin } from './actions';

function* handleLogin(action: ReturnType<typeof onLogin>) {
  try {
    const { data } = yield call(API.post, '/auth/login', {
      ...action.payload,
    });

    API.defaults.headers.Authorization = `Bearer ${data.access_token}`;
    localStorage.setItem('access_token', data.access_token);

    yield put(loginAsync.success());
    yield put(replace(Routes.MAIN));
  } catch (error) {
    let errorMessage = '';

    if (error.response && error.response.status === 401) {
      errorMessage = i18n.t('home.login.error.invalidCredentials');
    }

    yield put(loginAsync.failure(errorMessage));
  }
}

// WATCHERS

function* watchLoginRequest() {
  yield takeEvery(LoginActionTypes.LOGIN, handleLogin);
}

function* loginSaga() {
  yield all([fork(watchLoginRequest)]);
}

export { loginSaga };
