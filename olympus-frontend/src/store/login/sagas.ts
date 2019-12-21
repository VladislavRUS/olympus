import { all, call, fork, put, takeEvery, select, delay } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { onLoginError, onLoginSuccess } from './actions';
import { ILoginCredentials, LoginActionTypes } from './types';
import { IApplicationState } from '../index';
import { i18n } from '../../translations';
const getLoginCredentials = (state: IApplicationState): ILoginCredentials => state.login.credentials;

function* handleLogin() {
  yield delay(500);

  const credentials = yield select(getLoginCredentials);

  try {
    const { data } = yield call(API.post, '/auth/login', {
      ...credentials,
    });

    API.defaults.headers.Authorization = `Bearer ${data.access_token}`;

    yield put(onLoginSuccess());
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
