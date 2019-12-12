import React from 'react';
import { Wrapper } from './Checkbox.styles';

interface ICheckboxProps {
  onClick: () => void;
  isActive: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ isActive, onClick }) => (
  <Wrapper isActive={isActive} onClick={onClick} />
);

export default Checkbox;
