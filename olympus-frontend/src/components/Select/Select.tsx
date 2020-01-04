import React from 'react';
import { Dropdown } from '../Dropdown';
import { InputWrapper, Text, IconWrapper } from './Select.styles';
import { DropdownItem } from '../DropdownItem';
import { FiChevronDown } from 'react-icons/fi';

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
      <DropdownItem key={idx} item={item} renderItem={this.props.renderItem} onClick={this.onItemClick} />
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
      >
        {(handleRef: any) => (
          <InputWrapper ref={handleRef} onClick={this.onOpen}>
            <Text>{selectedItem ? extractValue(selectedItem) : placeholder}</Text>
            <IconWrapper isOpened={this.state.isOpened}>
              <FiChevronDown />
            </IconWrapper>
          </InputWrapper>
        )}
      </Dropdown>
    );
  }
}

export { Select };
