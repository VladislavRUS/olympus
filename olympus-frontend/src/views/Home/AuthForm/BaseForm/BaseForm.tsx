import React from 'react';
import { Wrapper, Title, Content } from './BaseForm.styles';

interface IBaseFormProps {
  title: string;
  onSubmit: () => void;
}

class BaseForm extends React.Component<IBaseFormProps> {
  onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const { title, children } = this.props;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Content onSubmit={this.onSubmit}>{children}</Content>
      </Wrapper>
    );
  }
}

export default BaseForm;
