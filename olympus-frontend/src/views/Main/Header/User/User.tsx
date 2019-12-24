import React from 'react';
import { Wrapper, Avatar, FullName } from './User.styles';
import { IApplicationState } from '../../../../store';
import { connect } from 'react-redux';
import { Dropdown } from '../../../../components/Dropdown';
import { DropdownItem } from '../../../../components/DropdownItem';
import { bindActionCreators, Dispatch, compose } from 'redux';
import { onLogout } from '../../../../store/current-user/actions';
import { withTranslation, WithTranslation } from 'react-i18next';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ onLogout }, dispatch);

interface IDispatchProps {
  onLogout: typeof onLogout;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    firstName: state.currentUser.firstName,
    lastName: state.currentUser.lastName,
  };

  return stateProps;
};

interface IStateProps {
  firstName: string;
  lastName: string;
}

type AllProps = IStateProps & IDispatchProps & WithTranslation;

interface IUserState {
  isDropdownOpened: boolean;
}

class User extends React.Component<AllProps, IUserState> {
  constructor(props: AllProps) {
    super(props);

    this.state = {
      isDropdownOpened: false,
    };
  }

  onOpenDropdown = () => {
    this.setState({ isDropdownOpened: true });
  };

  onCloseDropdown = () => {
    this.setState({ isDropdownOpened: false });
  };

  render() {
    const { firstName, lastName } = this.props;

    return (
      <Dropdown
        isOpened={this.state.isDropdownOpened}
        content={this.renderUserDropdownBody}
        onOutsideClick={this.onCloseDropdown}
        width={250}
      >
        {(handleRef: (element: any) => void) => (
          <Wrapper onClick={this.onOpenDropdown} ref={handleRef}>
            <Avatar />
            <FullName>
              {firstName} {lastName}
            </FullName>
          </Wrapper>
        )}
      </Dropdown>
    );
  }

  renderUserDropdownBody = () => {
    const { t } = this.props;

    return (
      <React.Fragment>
        <DropdownItem item={t('app.logout')} renderItem={item => item} onClick={this.props.onLogout} />
      </React.Fragment>
    );
  };
}

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(User);
