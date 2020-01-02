export interface IUserState {
  currentUser: IUser | null;
  isLoading: boolean;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export enum UserActionTypes {
  GET_CURRENT_USER_REQUEST = '@@user/GET_CURRENT_USER_REQUEST',
  GET_CURRENT_USER_SUCCESS = '@@user/GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_ERROR = '@@user/GET_CURRENT_USER_ERROR',
  LOGOUT = '@@user/LOGOUT',
}
