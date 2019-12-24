import React from 'react';
import { Wrapper } from './DropdownItem.styles';

interface IDropdownItemProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
  onClick: () => void;
}

class DropdownItem<T> extends React.Component<IDropdownItemProps<T>> {
  render() {
    const { item, renderItem, onClick } = this.props;
    return <Wrapper onClick={onClick}>{renderItem(item)}</Wrapper>;
  }
}

export default DropdownItem;
