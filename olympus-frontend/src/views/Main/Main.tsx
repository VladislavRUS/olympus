import React from 'react';
import { Page, Wrapper, Content } from './Main.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LeftNavigationBar } from './LeftNavigationBar';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { Profile } from './Profile';
import { Feed } from './Feed';
import { IApplicationState } from '../../store';
import { getCurrentUser } from '../../store/user/actions';

const mapStateToProps = (state: IApplicationState) => ({
  user: state.user.current,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCurrentUser,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & RouteComponentProps;

class Main extends React.Component<TProps> {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { user } = this.props;

    return (
      <Wrapper>
        <Header />
        <LeftNavigationBar />
        <Content>
          {user && (
            <Page>
              <Switch>
                <Route path={Routes.PROFILE} component={Profile} />
                <Route path={Routes.FEED} component={Feed} />
                <Redirect to={Routes.PROFILE.replace(':id', user.profile.id.toString())} />
              </Switch>
            </Page>
          )}
        </Content>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
