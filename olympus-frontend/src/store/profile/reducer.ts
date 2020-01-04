import { IProfileState, ProfileActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as profileActions from './actions';

export type ProfileAction = ActionType<typeof profileActions>;

export const initialState: IProfileState = {
  currentProfile: null,
  isLoading: false,
};

export const profileReducer = (state: IProfileState = initialState, action: ProfileAction): IProfileState => {
  switch (action.type) {
    case ProfileActionTypes.UPDATE_PROFILE_REQUEST:
    case ProfileActionTypes.GET_PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
    case ProfileActionTypes.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentProfile: action.payload,
      };
    }
    case ProfileActionTypes.UPDATE_PROFILE_ERROR:
    case ProfileActionTypes.GET_PROFILE_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
  }
  return state;
};
