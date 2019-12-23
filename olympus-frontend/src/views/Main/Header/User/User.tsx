import React from 'react';
import { Wrapper, Avatar, FullName } from './User.styles';
import { IApplicationState } from '../../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
  };

  return stateProps;
};

interface IStateProps {
  firstName: string;
  lastName: string;
}

type AllProps = IStateProps;

class User extends React.Component<AllProps> {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <Wrapper>
        <Avatar />
        <FullName>
          {firstName} {lastName}
        </FullName>
      </Wrapper>
    );
  }
}

export default connect<IStateProps, {}, {}, IApplicationState>(mapStateToProps)(User);
