import React from 'react';
import { Wrapper, Avatar, FullName } from './User.styles';
import { IApplicationState } from '../../../../store';
import { connect } from 'react-redux';
import { Dropdown } from '../../../../components/Dropdown';
import { bindActionCreators, Dispatch, compose } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { onLogout } from '../../../../store/user/actions';
import { DropdownTextItem } from '../../../../components/Dropdown/DropdownItems/DropdownTextItem';

const mapStateToProps = (state: IApplicationState) => ({
  user: state.user.current,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ onLogout }, dispatch);

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation;

type TState = {
  isDropdownOpened: boolean;
};

class User extends React.Component<TProps, TState> {
  constructor(props: TProps) {
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

    const { profile } = user;
    const { firstName, lastName, avatar } = profile;

    return (
      <Dropdown
        isOpened={this.state.isDropdownOpened}
        content={this.renderUserDropdownBody}
        onOutsideClick={this.onCloseDropdown}
        width={250}
      >
        <Wrapper onClick={this.onOpenDropdown}>
          <Avatar avatarUrl={avatar} />
          <FullName>
            {firstName} {lastName}
          </FullName>
        </Wrapper>
      </Dropdown>
    );
  }

  renderUserDropdownBody = () => {
    const { t } = this.props;

    return <DropdownTextItem text={t('app.logout')} onClick={this.props.onLogout} />;
  };
}

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(User);
