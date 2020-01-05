import React from 'react';
import { IApplicationState } from '../../store';
import { IUser } from '../../store/user/types';
import { IProfile } from '../../store/profile/types';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState): IStateProps => {
  return {
    user: state.user.current,
    profile: state.profile.current,
  };
};

interface IStateProps {
  user: IUser | null;
  profile: IProfile | null;
}

export enum AccessType {
  CURRENT = 'current',
  ANOTHER = 'another',
}

interface IRoleAccessProps {
  accessType: AccessType;
  children: any;
}

type TProps = IRoleAccessProps & IStateProps;

const UserAccess: React.FC<TProps> = ({ user, profile, accessType, children }) => {
  if (!user || !profile) {
    return null;
  }

  if (accessType === AccessType.CURRENT && user.profile.id !== profile.id) {
    return null;
  }

  if (accessType === AccessType.ANOTHER && user.profile.id === profile.id) {
    return null;
  }

  return children;
};

export default connect(mapStateToProps)(UserAccess);
