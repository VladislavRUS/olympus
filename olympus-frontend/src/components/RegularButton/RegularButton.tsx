import React from 'react';
import { StyledButton } from './RegularButton.styles';
import { Loader } from '../Loader';

interface IRegularButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const RegularButton: React.FC<IRegularButtonProps> = ({ text, onClick, isDisabled = false, isLoading = false }) => {
  return (
    <StyledButton onClick={onClick} isDisabled={isDisabled} type={'button'} isLoading={isLoading}>
      {isLoading ? <Loader isVisible={true} overlay={'hidden'} /> : <React.Fragment>{text}</React.Fragment>}
    </StyledButton>
  );
};

export default RegularButton;
