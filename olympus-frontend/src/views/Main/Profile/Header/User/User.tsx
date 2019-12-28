import React from 'react';
import { Wrapper, Information, FullName, Avatar } from './User.styles';
import { IApplicationState } from '../../../../../store';
import { connect } from 'react-redux';
import { IUser } from '../../../../../store/current-user/types';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    user: state.currentUser.user,
  };

  return stateProps;
};

interface IStateProps {
  user: IUser | null;
}

type Props = IStateProps;

class User extends React.Component<Props> {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    const { firstName, lastName } = user;

    return (
      <Wrapper>
        <Avatar />
        <Information>
          <FullName>{`${firstName} ${lastName}`}</FullName>
        </Information>
      </Wrapper>
    );
  }
}

export default connect<IStateProps, {}, {}, IApplicationState>(mapStateToProps)(User);
