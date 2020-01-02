import { ILoginState, LoginActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as loginActions from './actions';

export type LoginAction = ActionType<typeof loginActions>;

export const initialState: ILoginState = {
  isLoading: false,
  errorMessage: '',
};

export const loginReducer = (state: ILoginState = initialState, action: LoginAction): ILoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        errorMessage: '',
        isLoading: true,
      };
    }
    case LoginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LoginActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    }
  }

  return state;
};
