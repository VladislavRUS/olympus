import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { getCurrentUserSuccess, getCurrentUserError } from './actions';
import { CurrentUserActionTypes } from './types';

function* handleGetCurrentUser() {
  try {
    const { data } = yield call(API.get, '/auth/current-user');

    yield put(getCurrentUserSuccess(data));
  } catch (error) {
    yield put(getCurrentUserError());
  }
}

function* watchCurrentUserRequest() {
  yield takeEvery(CurrentUserActionTypes.GET_CURRENT_USER_REQUEST, handleGetCurrentUser);
}

function* currentUserSaga() {
  yield all([fork(watchCurrentUserRequest)]);
}

export { currentUserSaga };
