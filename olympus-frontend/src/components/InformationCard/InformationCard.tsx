import React from 'react';
import { Segment } from '../Segment';
import { Wrapper, Content, Title, Header, MenuIconWrapper } from './InformationCard.styles';
import { Dropdown } from '../Dropdown';
import { FiMoreHorizontal } from 'react-icons/fi';
import { withTranslation, WithTranslation } from 'react-i18next';
import { DropdownTextItem } from '../Dropdown/DropdownItems/DropdownTextItem';

interface IInformationCardProps {
  title: string;
  onEdit?: () => void;
}

interface IInformationCardState {
  isOpened: boolean;
}

type TProps = IInformationCardProps & WithTranslation;

class InformationCard extends React.Component<TProps, IInformationCardState> {
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

  render() {
    const { title, children } = this.props;

    return (
      <Segment>
        <Wrapper>
          <Header>
            <Title>{title}</Title>
            <Dropdown
              isOpened={this.state.isOpened}
              content={this.renderContent}
              onOutsideClick={this.onCloseDropdown}
              width={200}
            >
              <MenuIconWrapper onClick={this.onOpenDropdown}>
                <FiMoreHorizontal color={'#9a9fbf'} size={20} />
              </MenuIconWrapper>
            </Dropdown>
          </Header>
          <Content>{children}</Content>
        </Wrapper>
      </Segment>
    );
  }

  onEdit = () => {
    this.onCloseDropdown();

    if (this.props.onEdit) {
      this.props.onEdit();
    }
  };

  renderContent = () => {
    const { t } = this.props;

    return (
      <React.Fragment>
        <DropdownTextItem text={t('app.edit')} onClick={this.onEdit} />
      </React.Fragment>
    );
  };
}

const translated = withTranslation();

export default translated(InformationCard);
