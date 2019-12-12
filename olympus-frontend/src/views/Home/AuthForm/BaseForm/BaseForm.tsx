import React from 'react';
import { Wrapper, Title, Content } from './BaseForm.styles';

interface IBaseFormProps {
  title: string;
}

const BaseForm: React.FC<IBaseFormProps> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Wrapper>
);

export default BaseForm;
