import React from 'react';
import { Logo, Wrapper } from './Home.styles';
import { InformationBlock } from './InformationBlock';
import { AuthForm } from './AuthForm';
import { replace } from 'connected-react-router';
import { Routes } from '../../constants/Routes';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      replace,
    },
    dispatch,
  );

interface IDispatchProps {
  replace: typeof replace;
}

type TProps = IDispatchProps;

class Home extends React.Component<TProps> {
  componentDidMount() {
    if (localStorage.getItem('access_token')) {
      this.props.replace(Routes.MAIN);
    }
  }

  render() {
    return (
      <Wrapper>
        <Logo />
        <InformationBlock />
        <AuthForm />
      </Wrapper>
    );
  }
}

export default connect(null, mapDispatchToProps)(Home);
