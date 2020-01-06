import React from 'react';
import { Dropdown } from '../../../../../../components/Dropdown';
import { FiSettings } from 'react-icons/fi';
import { DropdownTextItem } from '../../../../../../components/Dropdown/DropdownItems/DropdownTextItem';
import { ButtonColorCircle } from '../../../../../../components/ButtonColorCircle';
import { FilePicker } from '../../../../../../components/FilePicker';
import { FilePickerAccept } from '../../../../../../components/FilePicker/FilePicker';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { updateProfileAvatar, updateProfileCover } from '../../../../../../store/profile/actions';
import { withTranslation, WithTranslation } from 'react-i18next';
import { IconWrapper } from './Settings.styles';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateProfileCover,
      updateProfileAvatar,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TDispatchProps & WithTranslation;

type TState = {
  isOpened: boolean;
};

class Settings extends React.Component<TProps, TState> {
  avatarRef = React.createRef<HTMLInputElement>();
  coverRef = React.createRef<HTMLInputElement>();

  constructor(props: TProps) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  onOpenDropdown = () => {
    this.setState({ isOpened: true });
  };

  onCloseDropdown = () => {
    this.setState({ isOpened: false });
  };

  onUploadAvatar = () => {
    this.onCloseDropdown();

    if (this.avatarRef.current) {
      this.avatarRef.current.click();
    }
  };

  onSelectAvatar = (files: File[]) => {
    this.props.updateProfileAvatar(files[0]);
  };

  onUploadCover = () => {
    this.onCloseDropdown();

    if (this.coverRef.current) {
      this.coverRef.current.click();
    }
  };

  onSelectCover = (files: File[]) => {
    this.props.updateProfileCover(files[0]);
  };

  renderContent = () => {
    const { t } = this.props;

    return (
      <React.Fragment>
        <DropdownTextItem text={t('profile.header.uploadAvatar')} onClick={this.onUploadAvatar} />
        <DropdownTextItem text={t('profile.header.uploadCover')} onClick={this.onUploadCover} />
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpened={this.state.isOpened}
          content={this.renderContent}
          onOutsideClick={this.onCloseDropdown}
          width={200}
          attachToElement={false}
        >
          <ButtonColorCircle color={'#ff5e3a'} onClick={this.onOpenDropdown}>
            <IconWrapper>
              <FiSettings color={'#fff'} size={22} />
            </IconWrapper>
          </ButtonColorCircle>
        </Dropdown>
        <FilePicker ref={this.avatarRef} onFilesSelect={this.onSelectAvatar} accept={FilePickerAccept.IMAGES} />
        <FilePicker ref={this.coverRef} onFilesSelect={this.onSelectCover} accept={FilePickerAccept.IMAGES} />
      </React.Fragment>
    );
  }
}

const translated = withTranslation();

export default compose(translated, connect(null, mapDispatchToProps))(Settings);
