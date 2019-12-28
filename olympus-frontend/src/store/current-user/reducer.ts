import { ICurrentUserState, CurrentUserActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as currentUserActions from './actions';

export const initialState: ICurrentUserState = {
  user: null,
  isLoading: false,
};

export const currentUserReducer = (
  state: ICurrentUserState = initialState,
  action: ActionType<typeof currentUserActions>,
): ICurrentUserState => {
  switch (action.type) {
    case CurrentUserActionTypes.GET_CURRENT_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        user: action.payload,
      };
    }
    case CurrentUserActionTypes.GET_CURRENT_USER_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
  }
  return state;
};
