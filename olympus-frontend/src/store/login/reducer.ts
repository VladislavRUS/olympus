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
  }

  return state;
};
