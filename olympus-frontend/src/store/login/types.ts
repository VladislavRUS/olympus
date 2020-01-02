export interface ILoginState {
  isLoading: boolean;
  errorMessage: string;
}

export enum LoginActionTypes {
  LOGIN_REQUEST = '@@login/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
  LOGIN_ERROR = '@@login/LOGIN_ERROR',
}
