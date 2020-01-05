import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API } from '../../utils/api';
import * as userActions from './actions';
import { UserActionTypes } from './types';
import { replace } from 'connected-react-router';
import { Routes } from '../../constants/Routes';

function* handleGetCurrentUser() {
  yield put(userActions.fetchUserAsync.request());

  try {
    const { data } = yield call(API.get, '/users/current');

    yield put(userActions.fetchUserAsync.success(data));
  } catch (error) {
    yield put(userActions.fetchUserAsync.failure());
  }
}

function* handleLogout() {
  localStorage.clear();
  yield put(replace(Routes.HOME));
}

// WATCHERS

function* watchCurrentUserRequest() {
  yield takeEvery(UserActionTypes.GET_CURRENT_USER, handleGetCurrentUser);
}

function* watchLogout() {
  yield takeEvery(UserActionTypes.LOGOUT, handleLogout);
}

function* userSaga() {
  yield all([fork(watchCurrentUserRequest), fork(watchLogout)]);
}

export { userSaga };
