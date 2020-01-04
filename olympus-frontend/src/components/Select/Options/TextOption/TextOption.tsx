import React from 'react';
import { Wrapper } from './TextOption.styles';

interface ITextOptionProps {
  text: string;
}

const TextOption: React.FC<ITextOptionProps> = ({ text }) => <Wrapper>{text}</Wrapper>;

export { TextOption };
