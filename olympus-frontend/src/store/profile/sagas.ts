import { all, call, fork, put, takeEvery, select, take } from 'redux-saga/effects';
import { API } from '../../utils/api';
import * as profileActions from './actions';
import { IProfile, ProfileActionTypes } from './types';
import { getCurrentUser } from '../user/actions';
import { getProfile } from './selectors';

function* handleGetProfile(action: ReturnType<typeof profileActions.getProfile>) {
  yield put(profileActions.fetchProfileAsync.request());

  try {
    const id = action.payload;

    const { data } = yield call(API.get, `/profiles/${id}`);

    yield put(profileActions.fetchProfileAsync.success(data));
  } catch (error) {
    yield put(profileActions.fetchProfileAsync.failure(error));
  }
}

function* handleUpdateProfile(action: ReturnType<typeof profileActions.updateProfile>) {
  yield put(profileActions.updateProfileAsync.request());

  try {
    const { id } = action.payload;

    const { data } = yield call(API.put, `/profiles/${id}`, action.payload);

    yield put(profileActions.updateProfileAsync.success(data));
  } catch (error) {
    yield put(profileActions.updateProfileAsync.failure(error));
  }
}

function* handleUpdateProfileCover(action: ReturnType<typeof profileActions.updateProfileCover>) {
  const formData = new FormData();
  formData.append('file', action.payload);

  const { data } = yield call(API.post, `/files`, formData);
  const { path } = data;

  const profile = yield select(getProfile);
  const updatedProfile: IProfile = { ...profile, cover: path };

  yield put(profileActions.updateProfile(updatedProfile));

  yield take([ProfileActionTypes.UPDATE_PROFILE_SUCCESS]);

  yield put(getCurrentUser());
}

function* handleUpdateProfileAvatar(action: ReturnType<typeof profileActions.updateProfileAvatar>) {
  const formData = new FormData();
  formData.append('file', action.payload);

  const { data } = yield call(API.post, `/files`, formData);
  const { path } = data;

  const profile = yield select(getProfile);
  const updatedProfile: IProfile = { ...profile, avatar: path };

  yield put(profileActions.updateProfile(updatedProfile));

  yield take([ProfileActionTypes.UPDATE_PROFILE_SUCCESS]);

  yield put(getCurrentUser());
}

// WATCHERS

function* watchProfileRequest() {
  yield takeEvery(ProfileActionTypes.GET_PROFILE, handleGetProfile);
}

function* watchProfileUpdate() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE, handleUpdateProfile);
}

function* watchProfileCoverUpdate() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE_COVER, handleUpdateProfileCover);
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
