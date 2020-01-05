import { ILoginState, LoginActionTypes } from './types';
import { ActionType, createReducer } from 'typesafe-actions';

import * as loginActions from './actions';

export type LoginAction = ActionType<typeof loginActions>;

export const initialState: ILoginState = {
  isLoading: false,
  errorMessage: '',
};

export const loginReducer = createReducer<ILoginState, LoginAction>(initialState, {
  [LoginActionTypes.LOGIN_REQUEST]: state => ({ ...state, errorMessage: '', isLoading: true }),
  [LoginActionTypes.LOGIN_SUCCESS]: state => ({ ...state, isLoading: false }),
  [LoginActionTypes.LOGIN_ERROR]: (state, action) => ({ ...state, errorMessage: action.payload, isLoading: false }),
});
