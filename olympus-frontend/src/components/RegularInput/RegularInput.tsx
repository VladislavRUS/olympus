import React from 'react';
import { Wrapper, StyledInput, PlaceholderHint } from './RegularInput.styles';

interface IRegularInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  autocomplete?: 'on' | 'off';
  isValid?: boolean;
}

class RegularInput extends React.PureComponent<IRegularInputProps> {
  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChangeText(event.currentTarget.value);
  };

  render() {
    const { value, placeholder = '', type = 'text', name = '', autocomplete = 'off', isValid = true } = this.props;

    return (
      <Wrapper>
        <PlaceholderHint value={value}>{placeholder}</PlaceholderHint>
        <StyledInput
          onChange={this.onChange}
          value={value}
          type={type}
          name={name}
          autoComplete={autocomplete}
          isValid={isValid}
        />
      </Wrapper>
    );
  }
}

export default RegularInput;
