import { createSelector } from 'reselect';
import { IApplicationState } from '../index';

const getPersonalInfo = (state: IApplicationState) => {
  if (state.profile.current) {
    return state.profile.current.personalInfo;
  }

  return null;
};

export const getPersonalInfoState = createSelector([getPersonalInfo], personalInfo => personalInfo);
