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

interface IRegularInputState {
  isDirty: boolean;
}

class RegularInput extends React.Component<IRegularInputProps, IRegularInputState> {
  constructor(props: IRegularInputProps) {
    super(props);

    this.state = {
      isDirty: false,
    };
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChangeText(event.currentTarget.value);

    if (!this.state.isDirty) {
      this.setState({ isDirty: true });
    }
  };

  render() {
    const { value, placeholder = '', type = 'text', name = '', autocomplete = 'off', isValid = true } = this.props;

    return (
      <Wrapper isValid={this.state.isDirty ? isValid : true}>
        {value && <PlaceholderHint>{placeholder}</PlaceholderHint>}
        <StyledInput
          onChange={this.onChange}
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          autoComplete={autocomplete}
        />
      </Wrapper>
    );
  }
}

export default RegularInput;
