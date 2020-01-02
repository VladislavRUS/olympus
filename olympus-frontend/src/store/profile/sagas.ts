import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import { API } from '../../utils/api';
import { getProfileSuccess, getProfileError } from './actions';
import { ProfileActionTypes } from './types';
import { IApplicationState } from '../index';

const getCurrentUserId = (state: IApplicationState) => {
  if (!state.user.currentUser) {
    return null;
  }

  return state.user.currentUser.id;
};

function* handleGetProfile() {
  try {
    const id = yield select(getCurrentUserId);

    if (id === null) {
      yield put(getProfileError());
      return;
    }

    const { data } = yield call(API.get, `/profiles/${id}`);

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
