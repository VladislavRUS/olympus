import { all, call, fork, put, takeEvery, select, delay } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { onRegisterError, onRegisterSuccess } from './actions';
import { IRegisterCredentials, RegisterActionTypes } from './types';
import { IApplicationState } from '../index';

const getRegisterCredentials = (state: IApplicationState): IRegisterCredentials => state.register.credentials;

function* handleRegister() {
  yield delay(500);

  const credentials = yield select(getRegisterCredentials);

  try {
    yield call(API.post, '/auth/register', {
      ...credentials,
    });

    yield put(onRegisterSuccess());
  } catch (error) {
    yield put(onRegisterError());
  }
}

function* watchRegisterRequest() {
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, handleRegister);
}

function* registerSaga() {
  yield all([fork(watchRegisterRequest)]);
}

export { registerSaga };
