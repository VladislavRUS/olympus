import { all, call, fork, put, takeEvery, delay } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { onRegisterError, onRegisterSuccess } from './actions';
import { RegisterActionTypes } from './types';
import { i18n } from '../../translations';
import { setLoginMode } from '../auth-form/actions';

function* handleRegister(action: any) {
  yield delay(500);

  try {
    yield call(API.post, '/auth/register', {
      ...action.payload,
    });

    yield put(onRegisterSuccess());
    yield put(setLoginMode());
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
