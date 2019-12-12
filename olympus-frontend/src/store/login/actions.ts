import { action } from 'typesafe-actions';
import { LoginActionTypes } from './types';

export const onChangeEmail = (email: string) => action(LoginActionTypes.CHANGE_EMAIL, email);
export const onChangePassword = (password: string) => action(LoginActionTypes.CHANGE_PASSWORD, password);
