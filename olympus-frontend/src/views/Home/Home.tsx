import React from 'react';
import { Logo, Wrapper } from './Home.styles';
import { InformationBlock } from './InformationBlock';
import { AuthForm } from './AuthForm';

const Home = () => {
  return (
    <Wrapper>
      <Logo />
      <InformationBlock />
      <AuthForm />
    </Wrapper>
  );
};

export default Home;
