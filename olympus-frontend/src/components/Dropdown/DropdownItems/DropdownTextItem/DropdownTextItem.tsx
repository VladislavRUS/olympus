import React from 'react';
import { BaseDropdownItem } from '../BaseDropdownItem';
import { Text } from './DropdownTextItem.styles';

interface IDropdownTextItemProps {
  text: string;
  onClick: () => void;
}

const DropdownTextItem: React.FC<IDropdownTextItemProps> = ({ text, onClick }) => (
  <BaseDropdownItem item={text} renderItem={text => <Text>{text}</Text>} onClick={onClick} />
);

export { DropdownTextItem };
