export interface ICurrentUserState {
  user: IUser | null;
  isLoading: boolean;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export enum CurrentUserActionTypes {
  GET_CURRENT_USER_REQUEST = '@@current-user/GET_CURRENT_USER_REQUEST',
  GET_CURRENT_USER_SUCCESS = '@@current-user/GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_ERROR = '@@current-user/GET_CURRENT_USER_ERROR',
  LOGOUT = '@@current-user/LOGOUT',
}
