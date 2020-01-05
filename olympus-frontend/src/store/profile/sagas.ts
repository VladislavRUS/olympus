import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import { API } from '../../utils/api';
import {
  getProfileSuccess,
  getProfileError,
  updateProfileSuccess,
  updateProfileError,
  updateProfileRequest,
} from './actions';
import { IProfile, ProfileActionTypes } from './types';
import { IApplicationState } from '../index';
import { getCurrentUserRequest } from '../user/actions';

const getProfile = (state: IApplicationState) => state.profile.current;

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

    const profile = yield select(getProfile);

    if (profile && id === profile.id) {
      yield put(getCurrentUserRequest());
    }
  } catch (error) {
    yield put(updateProfileError());
  }
}

function* watchProfileUpdate() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE_REQUEST, handleUpdateProfile);
}

function* handleUpdateProfileCover(action: any) {
  const file = action.payload;
  const formData = new FormData();
  formData.append('file', file);

  const { data } = yield call(API.post, `/files`, formData);
  const { path } = data;

  const profile = yield select(getProfile);
  const updatedProfile: IProfile = { ...profile, cover: path };

  yield put(updateProfileRequest(updatedProfile));
}

function* watchProfileCoverUpdate() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE_COVER, handleUpdateProfileCover);
}

function* handleUpdateProfileAvatar(action: any) {
  const file = action.payload;
  const formData = new FormData();
  formData.append('file', file);

  const { data } = yield call(API.post, `/files`, formData);
  const { path } = data;

  const profile = yield select(getProfile);
  const updatedProfile: IProfile = { ...profile, avatar: path };

  yield put(updateProfileRequest(updatedProfile));
}

function* watchProfileAvatarUpdate() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE_AVATAR, handleUpdateProfileAvatar);
}

function* profileSaga() {
  yield all([
    fork(watchProfileRequest),
    fork(watchProfileUpdate),
    fork(watchProfileCoverUpdate),
    fork(watchProfileAvatarUpdate),
  ]);
}

export { profileSaga };
