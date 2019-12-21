import { ILoginState, LoginActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as loginActions from './actions';

export type LoginAction = ActionType<typeof loginActions>;

export const initialState: ILoginState = {
  isLoading: false,
  errorMessage: '',
  credentials: {
    email: '',
    password: '',
  },
};

export const loginReducer = (state: ILoginState = initialState, action: LoginAction): ILoginState => {
  switch (action.type) {
    case LoginActionTypes.CHANGE_EMAIL: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          email: action.payload,
        },
      };
    }
    case LoginActionTypes.CHANGE_PASSWORD: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.payload,
        },
      };
    }
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
