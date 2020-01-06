import React from 'react';
import { Wrapper, PersonalInfoWrapper, InterestsWrapper, CareerWrapper } from './About.styles';
import { PersonalInfo } from './PersonalInfo';
import { Interests } from './Interests';
import { Career } from './Career';

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <PersonalInfoWrapper>
          <PersonalInfo />
        </PersonalInfoWrapper>
        <InterestsWrapper>
          <Interests />
        </InterestsWrapper>
        <CareerWrapper>
          <Career />
        </CareerWrapper>
      </Wrapper>
    );
  }
}

export default About;
