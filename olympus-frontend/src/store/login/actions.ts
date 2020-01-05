import { action, createAsyncAction } from 'typesafe-actions';
import { LoginActionTypes } from './types';

export const loginAsync = createAsyncAction(
  LoginActionTypes.LOGIN_REQUEST,
  LoginActionTypes.LOGIN_SUCCESS,
  LoginActionTypes.LOGIN_ERROR,
)<undefined, undefined, string>();

export const onLogin = (values: any) => action(LoginActionTypes.LOGIN, values);
