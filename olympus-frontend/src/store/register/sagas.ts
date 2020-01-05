import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { RegisterActionTypes } from './types';
import { i18n } from '../../i18n';
import { setLoginMode } from '../auth-form/actions';
import { registerAsync } from './actions';

function* handleRegister(action: any) {
  yield put(registerAsync.request());

  try {
    yield call(API.post, '/auth/register', {
      ...action.payload,
    });

    yield put(registerAsync.success());
    yield put(setLoginMode());
  } catch (error) {
    let errorMessage = '';

    if (error.response && error.response.status === 409) {
      errorMessage = i18n.t('home.register.error.alreadyExists');
    }

    yield put(registerAsync.failure(errorMessage));
  }
}

// WATCHERS

function* watchRegisterRequest() {
  yield takeEvery(RegisterActionTypes.REGISTER, handleRegister);
}

function* registerSaga() {
  yield all([fork(watchRegisterRequest)]);
}

export { registerSaga };
