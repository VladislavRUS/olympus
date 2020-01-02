import React from 'react';
import { Wrapper, Title, Content } from './BaseForm.styles';

interface IBaseFormProps {
  title: string;
  onSubmit: (values: any) => void;
}

class BaseForm extends React.Component<IBaseFormProps> {
  render() {
    const { title, children } = this.props;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Content onSubmit={this.props.onSubmit}>{children}</Content>
      </Wrapper>
    );
  }
}

export default BaseForm;
