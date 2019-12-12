import React from 'react';
import { Wrapper } from './TextHightlight.styles';

interface ITextHighlightProps {
  color?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const TextHighlight: React.FC<ITextHighlightProps> = ({ color = '#ff5e3a', onClick, children }) => (
  <Wrapper color={color} onClick={onClick}>
    {children}
  </Wrapper>
);

export default TextHighlight;
