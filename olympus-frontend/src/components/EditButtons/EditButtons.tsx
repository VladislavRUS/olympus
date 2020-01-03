import React from 'react';
import { RegularButton } from '../RegularButton';
import { Spacer } from '../Spacer';
import { ButtonsWrapper } from './EditButtons.styles';
import { RegularButtonMode } from '../RegularButton/RegularButton';

interface IEditButtonsProps {
  leftButtonText: string;
  leftButtonType?: 'button' | 'submit';
  leftButtonClick?: () => void;
  leftButtonMode?: RegularButtonMode;
  isLeftButtonDisabled?: boolean;
  rightButtonText: string;
  rightButtonClick?: () => void;
  rightButtonType?: 'button' | 'submit';
  rightButtonMode?: RegularButtonMode;
  isRightButtonDisabled?: boolean;
}

const EditButtons: React.FC<IEditButtonsProps> = ({
  leftButtonText,
  leftButtonType = 'button',
  leftButtonMode = RegularButtonMode.DEFAULT,
  leftButtonClick,
  isLeftButtonDisabled = false,
  rightButtonText,
  rightButtonType = 'submit',
  rightButtonMode = RegularButtonMode.SUCCESS,
  rightButtonClick,
  isRightButtonDisabled = false,
}) => (
  <ButtonsWrapper>
    <RegularButton
      text={leftButtonText}
      onClick={leftButtonClick}
      type={leftButtonType}
      mode={leftButtonMode}
      isDisabled={isLeftButtonDisabled}
    />
    <Spacer width={20} />
    <RegularButton
      text={rightButtonText}
      onClick={rightButtonClick}
      type={rightButtonType}
      mode={rightButtonMode}
      isDisabled={isRightButtonDisabled}
    />
  </ButtonsWrapper>
);

export { EditButtons };
