import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { getProfileSuccess, getProfileError, updateProfileSuccess, updateProfileError } from './actions';
import { ProfileActionTypes } from './types';

function* handleGetProfile(action: any) {
  try {
    const id = action.payload;

    const { data } = yield call(API.get, `/profiles/${id}`);

    yield put(getProfileSuccess(data));
  } catch (error) {
    yield put(getProfileError());
  }
}

function* watchProfileRequest() {
  yield takeEvery(ProfileActionTypes.GET_PROFILE_REQUEST, handleGetProfile);
}

function* handleUpdateProfile(action: any) {
  try {
    const { id } = action.payload;

    const { data } = yield call(API.put, `/profiles/${id}`, action.payload);

    yield put(updateProfileSuccess(data));
  } catch (error) {
    yield put(updateProfileError());
  }
}

function* watchProfileUpdate() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE_REQUEST, handleUpdateProfile);
}

function* profileSaga() {
  yield all([fork(watchProfileRequest), fork(watchProfileUpdate)]);
}

export { profileSaga };
