import React from 'react';
import { Wrapper, PersonalInfoWrapper, HobbiesWrapper, CareerWrapper } from './About.styles';
import { PersonalInfo } from './PersonalInfo';
import { Hobbies } from './Hobbies';
import { Career } from './Career';

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <PersonalInfoWrapper>
          <PersonalInfo />
        </PersonalInfoWrapper>
        <HobbiesWrapper>
          <Hobbies />
        </HobbiesWrapper>
        <CareerWrapper>
          <Career />
        </CareerWrapper>
      </Wrapper>
    );
  }
}

export default About;
