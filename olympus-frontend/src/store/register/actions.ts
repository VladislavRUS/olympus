import { action, createAsyncAction } from 'typesafe-actions';
import { RegisterActionTypes } from './types';

export const registerAsync = createAsyncAction(
  RegisterActionTypes.REGISTER_REQUEST,
  RegisterActionTypes.REGISTER_SUCCESS,
  RegisterActionTypes.REGISTER_ERROR,
)<undefined, undefined, string>();

export const onRegister = (values: any) => action(RegisterActionTypes.REGISTER, values);
