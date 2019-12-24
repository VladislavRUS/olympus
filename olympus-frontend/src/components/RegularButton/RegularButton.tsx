import React from 'react';
import { StyledButton } from './RegularButton.styles';
import { Loader } from '../Loader';

interface IRegularButtonProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit';
}

const RegularButton: React.FC<IRegularButtonProps> = ({
  text,
  type = 'button',
  onClick,
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <StyledButton onClick={onClick} type={type} isLoading={isLoading} disabled={isDisabled}>
      {isLoading ? <Loader isVisible={true} overlay={'hidden'} /> : <React.Fragment>{text}</React.Fragment>}
    </StyledButton>
  );
};

export default RegularButton;
