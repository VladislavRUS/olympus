import { IRegisterState, RegisterActionTypes } from './types';
import { ActionType, createReducer } from 'typesafe-actions';

import * as registerActions from './actions';

export type RegisterAction = ActionType<typeof registerActions>;

export const initialState: IRegisterState = {
  isLoading: false,
  errorMessage: '',
};

export const registerReducer = createReducer<IRegisterState, RegisterAction>(initialState, {
  [RegisterActionTypes.REGISTER_REQUEST]: state => ({ ...state, errorMessage: '', isLoading: true }),
  [RegisterActionTypes.REGISTER_SUCCESS]: state => ({ ...state, isLoading: false }),
  [RegisterActionTypes.REGISTER_ERROR]: (state, action) => ({
    ...state,
    errorMessage: action.payload,
    isLoading: true,
  }),
});
