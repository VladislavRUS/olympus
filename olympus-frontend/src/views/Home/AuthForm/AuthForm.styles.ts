import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
  width: 470px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  background-color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: 96px;
`;

export const AnimatedFormWrapper = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

export const FormContent = styled.div`
  flex-grow: 1;
  border-left: 1px solid #e6ecf5;
`;
