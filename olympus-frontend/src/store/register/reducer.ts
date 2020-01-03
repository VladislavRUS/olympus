import { IRegisterState, RegisterActionTypes } from './types';
import { ActionType } from 'typesafe-actions';

import * as registerActions from './actions';

export type RegisterAction = ActionType<typeof registerActions>;

export const initialState: IRegisterState = {
  isLoading: false,
  errorMessage: '',
};

export const registerReducer = (state: IRegisterState = initialState, action: RegisterAction): IRegisterState => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST: {
      return {
        ...state,
        errorMessage: '',
        isLoading: true,
      };
    }
    case RegisterActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case RegisterActionTypes.REGISTER_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    }
  }

  return state;
};
