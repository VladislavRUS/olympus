import React from 'react';
import { Wrapper, StyledInput, PlaceholderHint } from './RegularInput.styles';

interface IRegularInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  autocomplete?: 'on' | 'off';
}

const RegularInput: React.FC<IRegularInputProps> = ({
  value,
  placeholder = '',
  onChangeText,
  type = 'text',
  name = '',
  autocomplete = 'off',
}) => {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => onChangeText(event.currentTarget.value);

  return (
    <Wrapper>
      {value && <PlaceholderHint>{placeholder}</PlaceholderHint>}
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        autoComplete={autocomplete}
      />
    </Wrapper>
  );
};

export default RegularInput;
