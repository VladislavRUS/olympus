import { IApplicationState } from '../index';

export const getProfile = (state: IApplicationState) => state.profile.current;
