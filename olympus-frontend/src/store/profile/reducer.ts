import { IProfileState, ProfileActionTypes } from './types';
import { ActionType, createReducer } from 'typesafe-actions';

import * as profileActions from './actions';

export type ProfileAction = ActionType<typeof profileActions>;

export const initialState: IProfileState = {
  current: null,
  isLoading: false,
};

export const profileReducer = createReducer<IProfileState, ProfileAction>(initialState, {
  [ProfileActionTypes.GET_PROFILE_REQUEST]: state => ({ ...state, isLoading: true }),
  [ProfileActionTypes.GET_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    current: action.payload,
  }),
  [ProfileActionTypes.GET_PROFILE_ERROR]: state => ({ ...state, isLoading: false }),
  [ProfileActionTypes.UPDATE_PROFILE_REQUEST]: state => ({ ...state, isLoading: true }),
  [ProfileActionTypes.UPDATE_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    current: action.payload,
  }),
  [ProfileActionTypes.UPDATE_PROFILE_ERROR]: state => ({ ...state, isLoading: false }),
});
