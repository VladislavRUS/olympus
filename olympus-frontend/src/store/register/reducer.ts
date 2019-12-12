import { IRegisterState, RegisterActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as registerActions from './actions';

export type RegisterAction = ActionType<typeof registerActions>;

export const initialState: IRegisterState = {
  isLoading: false,
  errorMessage: '',
  credentials: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    isTermsAccepted: false,
    gender: null,
  },
};

export const registerReducer = (state: IRegisterState = initialState, action: RegisterAction): IRegisterState => {
  switch (action.type) {
    case RegisterActionTypes.CHANGE_FIRST_NAME: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          firstName: action.payload,
        },
      };
    }
    case RegisterActionTypes.CHANGE_LAST_NAME: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          lastName: action.payload,
        },
      };
    }
    case RegisterActionTypes.CHANGE_EMAIL: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          email: action.payload,
        },
      };
    }
    case RegisterActionTypes.CHANGE_PASSWORD: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.payload,
        },
      };
    }
    case RegisterActionTypes.CHANGE_BIRTHDAY: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          birthday: action.payload,
        },
      };
    }
    case RegisterActionTypes.CHANGE_GENDER: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          gender: action.payload,
        },
      };
    }
    case RegisterActionTypes.TOGGLE_TERMS_ACCEPT: {
      return {
        ...state,
        credentials: {
          ...state.credentials,
          isTermsAccepted: !state.credentials.isTermsAccepted,
        },
      };
    }
  }

  return state;
};
