export enum AuthFormModes {
  LOGIN = 'login',
  REGISTER = 'register',
}

export interface IAuthFormState {
  mode: AuthFormModes;
}

export enum AuthFormActionTypes {
  SET_LOGIN_MODE = '@@authForm/SET_LOGIN_MODE',
  SET_REGISTER_MODE = '@@authForm/SET_REGISTER_MODE',
}
