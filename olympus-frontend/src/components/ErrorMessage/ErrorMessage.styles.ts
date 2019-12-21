import styled from 'styled-components';
import posed from 'react-pose';

const PoseWrapper = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

export const Wrapper = styled(PoseWrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 54px;
  padding: 0 10px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

export const Text = styled.div`
  color: #721c24;
  font-size: 14px;
`;
