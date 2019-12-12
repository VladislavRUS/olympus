import React from 'react';
import { Wrapper, Title, Subtitle, RegisterButton } from './InformationBlock.styles';

const InformationBlock = () => (
  <Wrapper>
    <Title>Welcome to the Biggest Social Network in the World</Title>
    <Subtitle>
      We are the best and biggest social network with 5 billion active users all around the world. Share you thoughts,
      write blog posts, show your favourite music via Stopify, earn badges and much more!
    </Subtitle>
    <RegisterButton>Register Now</RegisterButton>
  </Wrapper>
);

export default InformationBlock;
