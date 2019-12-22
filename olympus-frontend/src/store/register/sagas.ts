import { all, call, fork, put, takeEvery, select, delay } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { onRegisterError, onRegisterSuccess } from './actions';
import { IRegisterCredentials, RegisterActionTypes } from './types';
import { IApplicationState } from '../index';
import { i18n } from '../../translations';
import { setLoginMode } from '../auth-form/actions';
import { onChangePassword, onChangeEmail } from '../login/actions';

const getRegisterCredentials = (state: IApplicationState): IRegisterCredentials => state.register.credentials;

function* handleRegister() {
  yield delay(500);

  const credentials: IRegisterCredentials = yield select(getRegisterCredentials);

  try {
    yield call(API.post, '/auth/register', {
      ...credentials,
    });

    yield put(setLoginMode());
    yield put(onChangeEmail(credentials.email));
    yield put(onChangePassword(credentials.password));
    yield put(onRegisterSuccess());
  } catch (error) {
    let errorMessage = '';

    if (error.response && error.response.status === 409) {
      errorMessage = i18n.t('home.register.error.alreadyExists');
    }

    yield put(onRegisterError(errorMessage));
  }
}

function* watchRegisterRequest() {
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, handleRegister);
}

function* registerSaga() {
  yield all([fork(watchRegisterRequest)]);
}

export { registerSaga };
