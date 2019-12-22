import React from 'react';
import { Wrapper } from './Main.styles';
import { Header } from './Header';
import { getProfileRequest } from '../../store/profile/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getProfileRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  getProfileRequest: typeof getProfileRequest;
}

class Main extends React.Component<IDispatchProps> {
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

export default connect(null, mapDispatchToProps)(Main);
