import React from 'react';
import { Wrapper, StyledInput, PlaceholderHint, Error } from './RegularInput.styles';

interface IRegularInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  onFocus?: (event: React.FocusEvent<any>) => void;
  onBlur?: (event: React.FocusEvent<any>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  autocomplete?: 'on' | 'off';
  error?: string;
  touched?: boolean;
}

class RegularInput extends React.PureComponent<IRegularInputProps> {
  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (this.props.onChangeText) {
      this.props.onChangeText(event.currentTarget.value);
    }
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
      value,
      placeholder = '',
      type = 'text',
      name = '',
      autocomplete = 'off',
      touched = false,
      error = '',
      onFocus,
      onBlur,
    } = this.props;

    const showError = touched && error;

    return (
      <Wrapper>
        <PlaceholderHint value={value}>{placeholder}</PlaceholderHint>
        <StyledInput
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type={type}
          name={name}
          autoComplete={autocomplete}
          isValid={!showError}
        />

        {showError && <Error>{error}</Error>}
      </Wrapper>
    );
  }
}

export default RegularInput;
