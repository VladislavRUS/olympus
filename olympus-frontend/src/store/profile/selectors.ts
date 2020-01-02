import { createSelector } from 'reselect';
import { IApplicationState } from '../index';

const getPersonalInfo = (state: IApplicationState) => {
  if (state.profile.currentProfile) {
    return state.profile.currentProfile.personalInfo;
  }

  return null;
};

export const getPersonalInfoState = createSelector([getPersonalInfo], personalInfo => personalInfo);
