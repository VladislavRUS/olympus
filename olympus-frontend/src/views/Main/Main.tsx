import React from 'react';
import { Content, Page, Wrapper } from './Main.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LeftNavigationBar } from './LeftNavigationBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { Profile } from './Profile';
import { Feed } from './Feed';
import { getCurrentUserRequest } from '../../store/current-user/actions';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCurrentUserRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  getCurrentUserRequest: typeof getCurrentUserRequest;
}

class Main extends React.Component<IDispatchProps> {
  componentDidMount() {
    this.props.getCurrentUserRequest();
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <LeftNavigationBar />
          <Page>
            <Switch>
              <Route path={Routes.PROFILE} component={Profile} />
              <Route path={Routes.FEED} component={Feed} />
              <Redirect to={Routes.PROFILE} />
            </Switch>
          </Page>
        </Content>
      </Wrapper>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
