import { ActionType, createReducer } from 'typesafe-actions';

import * as authFormActions from './actions';
import { AuthFormActionTypes, AuthFormModes, IAuthFormState } from './types';

export type AuthFormAction = ActionType<typeof authFormActions>;

export const initialState: IAuthFormState = {
  mode: AuthFormModes.LOGIN,
};

export const authFormReducer = createReducer<IAuthFormState, AuthFormAction>(initialState, {
  [AuthFormActionTypes.SET_LOGIN_MODE]: state => ({ ...state, mode: AuthFormModes.LOGIN }),
  [AuthFormActionTypes.SET_REGISTER_MODE]: state => ({ ...state, mode: AuthFormModes.REGISTER }),
});
