import React from 'react';
import { Wrapper } from './DropdownItem.styles';

interface IDropdownItemProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
}

class DropdownItem<T> extends React.Component<IDropdownItemProps<T>> {
  onClick = () => {
    this.props.onClick(this.props.item);
  };

  render() {
    const { item, renderItem } = this.props;
    return <Wrapper onClick={this.onClick}>{renderItem(item)}</Wrapper>;
  }
}

export default DropdownItem;
