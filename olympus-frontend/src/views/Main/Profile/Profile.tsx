import React from 'react';
import { Wrapper } from './Profile.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { getProfile } from '../../../store/profile/actions';
import { connect } from 'react-redux';
import { Spacer } from '../../../components/Spacer';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { About } from './About';
import { Routes } from '../../../constants/Routes';
import { IApplicationState } from '../../../store';

const mapStateToProps = (state: IApplicationState) => ({
  profile: state.profile.current,
  user: state.user.current,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getProfile,
    },
    dispatch,
  );
};

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & RouteComponentProps;

class Profile extends React.Component<TProps> {
  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params as any;

    this.props.getProfile(id);
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
