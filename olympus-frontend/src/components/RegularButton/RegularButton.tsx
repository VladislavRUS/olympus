import React from 'react';
import { StyledButton } from './RegularButton.styles';
import { Loader } from '../Loader';

export enum RegularButtonMode {
  PRIMARY = 'ACCENT',
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
}

interface IRegularButtonProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit';
  mode?: RegularButtonMode;
}

const RegularButton: React.FC<IRegularButtonProps> = ({
  text,
  type = 'button',
  onClick,
  isDisabled = false,
  isLoading = false,
  mode = RegularButtonMode.DEFAULT,
}) => {
  return (
    <StyledButton onClick={onClick} type={type} isLoading={isLoading} disabled={isDisabled} mode={mode}>
      {isLoading ? (
        <Loader isVisible={true} overlay={'hidden'} color={'#fff'} />
      ) : (
        <React.Fragment>{text}</React.Fragment>
      )}
    </StyledButton>
  );
};

export default RegularButton;
