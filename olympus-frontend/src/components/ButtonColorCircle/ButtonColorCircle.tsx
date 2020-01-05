import React from 'react';
import { Wrapper } from './ButtonColorCircle.styles';

interface IButtonColorCircleProps {
  onClick?: () => void;
  color?: string;
  size?: number;
}

const ButtonColorCircle: React.FC<IButtonColorCircleProps> = ({ onClick, color = '#000', size = 50, children }) => (
  <Wrapper onClick={onClick} color={color} size={size}>
    {children}
  </Wrapper>
);

export { ButtonColorCircle };
