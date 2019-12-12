export interface ILoginState {
  isLoading: boolean;
  errorMessage: string;
  credentials: ILoginCredentials;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export enum LoginActionTypes {
  CHANGE_EMAIL = '@@login/CHANGE_EMAIL',
  CHANGE_PASSWORD = '@@login/CHANGE_PASSWORD',
  LOGIN_REQUEST = '@@login/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
  LOGIN_ERROR = '@@login/LOGIN_ERROR',
}
