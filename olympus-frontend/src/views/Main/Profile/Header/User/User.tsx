import React from 'react';
import { Wrapper, Information, FullName, Avatar } from './User.styles';
import { IApplicationState } from '../../../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => ({
  profile: state.profile.current,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps;

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

export default connect(mapStateToProps)(User);
