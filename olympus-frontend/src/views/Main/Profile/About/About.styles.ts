import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 370px 1fr;
  grid-template-rows: auto auto;
  grid-gap: 30px;
  grid-template-areas:
    'personal interests'
    'personal career';
`;

export const PersonalInfoWrapper = styled.div`
  grid-area: personal;
`;

export const InterestsWrapper = styled.div`
  grid-area: interests;
`;

export const CareerWrapper = styled.div`
  grid-area: career;
`;
