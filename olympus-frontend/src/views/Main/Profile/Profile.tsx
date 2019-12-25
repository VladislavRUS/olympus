import React from 'react';
import { Wrapper } from './Profile.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { getProfileRequest } from '../../../store/profile/actions';
import { connect } from 'react-redux';
import { Spacer } from '../../../components/Spacer';
import { Switch, Route, Redirect } from 'react-router-dom';
import { About } from './About';
import { Routes } from '../../../constants/Routes';

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
        <Spacer height={26} />
        <Switch>
          <Route path={Routes.PROFILE_ABOUT} component={About} />
          <Redirect to={Routes.PROFILE_ABOUT} />
        </Switch>
      </Wrapper>
    );
  }
}

export default connect(null, mapDispatchToProps)(Profile);
