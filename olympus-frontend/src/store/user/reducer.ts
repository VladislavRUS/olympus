import { IUserState, UserActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as currentUserActions from './actions';

export const initialState: IUserState = {
  currentUser: null,
  isLoading: false,
};

export const userReducer = (
  state: IUserState = initialState,
  action: ActionType<typeof currentUserActions>,
): IUserState => {
  switch (action.type) {
    case UserActionTypes.GET_CURRENT_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserActionTypes.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        currentUser: action.payload,
      };
    }
    case UserActionTypes.GET_CURRENT_USER_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
  }
  return state;
};
