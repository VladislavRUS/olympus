import React from 'react';
import { Wrapper } from './Profile.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { getProfileRequest } from '../../../store/profile/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getProfileRequest,
    },
    dispatch,
  );
};

interface IDispatchProps {
  getProfileRequest: typeof getProfileRequest;
}

type AllProps = IDispatchProps;

class Profile extends React.Component<AllProps> {
  componentDidMount() {
    this.props.getProfileRequest();
  }

  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default connect(null, mapDispatchToProps)(Profile);
