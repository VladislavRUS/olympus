import React from 'react';
import { Wrapper, Avatar, FullName } from './User.styles';
import { IApplicationState } from '../../../../store';
import { connect } from 'react-redux';
import { Dropdown } from '../../../../components/Dropdown';
import { DropdownItem } from '../../../../components/DropdownItem';
import { bindActionCreators, Dispatch, compose } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';
import { IUser } from '../../../../store/user/types';
import { onLogout } from '../../../../store/user/actions';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ onLogout }, dispatch);

interface IDispatchProps {
  onLogout: typeof onLogout;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    user: state.user.currentUser,
  };

  return stateProps;
};

interface IStateProps {
  user: IUser | null;
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
    const { user } = this.props;

    if (!user) {
      return null;
    }

    const { firstName, lastName } = user;

    return (
      <Dropdown
        isOpened={this.state.isDropdownOpened}
        content={this.renderUserDropdownBody}
        onOutsideClick={this.onCloseDropdown}
        width={250}
      >
        {(handleRef: (element: any) => void) => (
          <Wrapper onClick={this.onOpenDropdown} ref={handleRef}>
            <Avatar>
              <FiUser size={34} color={'#fff'} />
            </Avatar>
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
