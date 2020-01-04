import React from 'react';
import { Dropdown } from '../Dropdown';
import { Wrapper, Text, IconWrapper } from './Select.styles';
import { FiChevronDown } from 'react-icons/fi';
import { BaseDropdownItem } from '../Dropdown/DropdownItems/BaseDropdownItem';

interface ISelectProps<T> {
  selectedItem: T;
  extractValue: (item: T) => string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onItemClick: (item: T) => void;
  placeholder?: string;
}

type TProps<T> = ISelectProps<T>;

type TState = {
  isOpened: boolean;
};

class Select<T> extends React.Component<TProps<T>, TState> {
  constructor(props: TProps<T>) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  onItemClick = (item: T) => {
    this.props.onItemClick(item);
    this.onClose();
  };

  renderContent = () => {
    return this.props.items.map((item, idx) => (
      <BaseDropdownItem key={idx} item={item} renderItem={this.props.renderItem} onClick={this.onItemClick} />
    ));
  };

  onOpen = () => {
    this.setState({ isOpened: true });
  };

  onClose = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { selectedItem, extractValue, placeholder = '' } = this.props;

    return (
      <Dropdown
        isOpened={this.state.isOpened}
        content={this.renderContent}
        onOutsideClick={this.onClose}
        width={100}
        units={'%'}
        arrow={false}
      >
        {(handleRef: any) => (
          <Wrapper ref={handleRef} onClick={this.onOpen}>
            <Text>{selectedItem ? extractValue(selectedItem) : placeholder}</Text>
            <IconWrapper isOpened={this.state.isOpened}>
              <FiChevronDown />
            </IconWrapper>
          </Wrapper>
        )}
      </Dropdown>
    );
  }
}

export { Select };
