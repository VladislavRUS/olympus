import React from 'react';
import { Page, Wrapper, Content } from './Main.styles';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LeftNavigationBar } from './LeftNavigationBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { Profile } from './Profile';
import { Feed } from './Feed';
import { getCurrentUserRequest } from '../../store/current-user/actions';
import { IApplicationState } from '../../store';
import { IUser } from '../../store/current-user/types';

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

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    user: state.currentUser.user,
  };

  return stateProps;
};

interface IStateProps {
  user: IUser | null;
}

type Props = IStateProps & IDispatchProps;

class Main extends React.Component<Props> {
  componentDidMount() {
    this.props.getCurrentUserRequest();
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
                <Redirect to={Routes.PROFILE} />
              </Switch>
            </Page>
          )}
        </Content>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
