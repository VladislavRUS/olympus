import React from 'react';
import { Wrapper } from './FormModeToggle.styles';

interface IFormModeToggle {
  icon: React.ElementType;
  onClick: () => void;
  isActive?: boolean;
}

const FormModeToggle: React.FC<IFormModeToggle> = ({ icon, onClick, isActive = false }) => {
  const Icon = icon;

  return (
    <Wrapper onClick={onClick} isActive={isActive}>
      <Icon color={isActive ? '#ff5e3a' : '#9a9fbf'} />
    </Wrapper>
  );
};

export default FormModeToggle;
