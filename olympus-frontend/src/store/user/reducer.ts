import { IUserState, UserActionTypes } from './types';
import { ActionType, createReducer } from 'typesafe-actions';

import * as userActions from './actions';

export type UserAction = ActionType<typeof userActions>;

export const initialState: IUserState = {
  current: null,
  isLoading: false,
};

export const userReducer = createReducer<IUserState, UserAction>(initialState, {
  [UserActionTypes.GET_CURRENT_USER_REQUEST]: state => ({ ...state, isLoading: true }),
  [UserActionTypes.GET_CURRENT_USER_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    current: action.payload,
  }),
  [UserActionTypes.GET_CURRENT_USER_ERROR]: state => ({ ...state, isLoading: false }),
});
