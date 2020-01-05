import React from 'react';
import { Wrapper, Information, FullName, Avatar } from './User.styles';
import { IApplicationState } from '../../../../../store';
import { connect } from 'react-redux';
import { IProfile } from '../../../../../store/profile/types';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    profile: state.profile.current,
  };

  return stateProps;
};

interface IStateProps {
  profile: IProfile | null;
}

type TProps = IStateProps;

class User extends React.Component<TProps> {
  render() {
    const { profile } = this.props;

    if (!profile) {
      return null;
    }

    const { firstName, lastName, avatar } = profile;

    return (
      <Wrapper>
        <Avatar avatarUrl={avatar} />
        <Information>
          <FullName>{`${firstName} ${lastName}`}</FullName>
        </Information>
      </Wrapper>
    );
  }
}

export default connect<IStateProps, {}, {}, IApplicationState>(mapStateToProps)(User);
