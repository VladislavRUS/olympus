import React from 'react';
import { Wrapper, Cover } from './Header.styles';
import { User } from './User';
import { Navbar } from './Navbar';
import { Segment } from '../../../../components/Segment';
import { Actions } from './Actions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../store';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    avatarUrl: state.profile.current ? state.profile.current.avatar : null,
    coverUrl: state.profile.current ? state.profile.current.cover : null,
  };

  return stateProps;
};

interface IStateProps {
  coverUrl: string | null;
  avatarUrl: string | null;
}

type TProps = IStateProps;

class Header extends React.Component<TProps, any> {
  render() {
    const { coverUrl } = this.props;

    return (
      <Segment>
        <Wrapper>
          <Cover imageUrl={coverUrl} />
          <User />
          <Actions />
          <Navbar />
        </Wrapper>
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(Header);
