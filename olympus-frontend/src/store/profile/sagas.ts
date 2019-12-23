import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { getProfileSuccess, getProfileError } from './actions';
import { ProfileActionTypes } from './types';

function* handleGetProfile() {
  try {
    const { data } = yield call(API.get, '/profile');

    yield put(getProfileSuccess(data));
  } catch (error) {
    yield put(getProfileError());
  }
}

function* watchProfileRequest() {
  yield takeEvery(ProfileActionTypes.GET_PROFILE_REQUEST, handleGetProfile);
}

function* profileSaga() {
  yield all([fork(watchProfileRequest)]);
}

export { profileSaga };
