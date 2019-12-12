import { ActionType } from 'typesafe-actions';

import * as authFormActions from './actions';
import { AuthFormActionTypes, AuthFormModes, IAuthFormState } from './types';

export type AuthFormAction = ActionType<typeof authFormActions>;

export const initialState: IAuthFormState = {
  mode: AuthFormModes.REGISTER,
};

export const authFormReducer = (state: IAuthFormState = initialState, action: AuthFormAction): IAuthFormState => {
  switch (action.type) {
    case AuthFormActionTypes.SET_LOGIN_MODE: {
      return {
        ...state,
        mode: AuthFormModes.LOGIN,
      };
    }
    case AuthFormActionTypes.SET_REGISTER_MODE: {
      return {
        ...state,
        mode: AuthFormModes.REGISTER,
      };
    }
  }

  return state;
};
