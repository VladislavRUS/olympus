import React from 'react';
import { Wrapper, Information, FullName, Avatar } from './User.styles';
import { IApplicationState } from '../../../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    firstName: state.currentUser.firstName,
    lastName: state.currentUser.lastName,
  };

  return stateProps;
};

interface IStateProps {
  firstName: string;
  lastName: string;
}

type Props = IStateProps;

class User extends React.Component<Props> {
  render() {
    const { firstName, lastName } = this.props;

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
