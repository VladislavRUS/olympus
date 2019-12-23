import { IProfileState, ProfileActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as profileActions from './actions';

export type ProfileAction = ActionType<typeof profileActions>;

export const initialState: IProfileState = {
  firstName: '',
  lastName: '',
  isLoading: false,
};

export const profileReducer = (state: IProfileState = initialState, action: ProfileAction): IProfileState => {
  switch (action.type) {
    case ProfileActionTypes.GET_PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProfileActionTypes.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    }
    case ProfileActionTypes.GET_PROFILE_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
  }
  return state;
};