import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: #edf2f6;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
`;

export const Page = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  padding: 40px 30px;
`;
