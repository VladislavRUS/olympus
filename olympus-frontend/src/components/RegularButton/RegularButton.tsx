import React from 'react';
import { StyledButton } from './RegularButton.styles';

interface IRegularButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const RegularButton: React.FC<IRegularButtonProps> = ({ text, onClick, isDisabled = false }) => (
  <StyledButton onClick={onClick} isDisabled={isDisabled} type={'button'}>
    {text}
  </StyledButton>
);

export default RegularButton;
