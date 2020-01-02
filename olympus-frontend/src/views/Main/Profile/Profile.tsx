import React from 'react';
import { Wrapper } from './Profile.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { getProfileRequest } from '../../../store/profile/actions';
import { connect } from 'react-redux';
import { Spacer } from '../../../components/Spacer';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { About } from './About';
import { Routes } from '../../../constants/Routes';
import { IApplicationState } from '../../../store';
import { IProfile } from '../../../store/profile/types';
import { IUser } from '../../../store/user/types';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    profile: state.profile.currentProfile,
    user: state.user.currentUser,
  };

  return stateProps;
};

interface IStateProps {
  profile: IProfile | null;
  user: IUser | null;
}

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

type AllProps = IStateProps & IDispatchProps & RouteComponentProps;

class Profile extends React.Component<AllProps> {
  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params as any;

    this.props.getProfileRequest(id);
  }

  render() {
    const { user } = this.props;

    return (
      <Wrapper>
        <Header />
        <Spacer height={26} />
        <Switch>
          <Route path={Routes.PROFILE_ABOUT} component={About} />
          {user && <Redirect to={Routes.PROFILE_ABOUT.replace(':id', user.id.toString())} />}
        </Switch>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
