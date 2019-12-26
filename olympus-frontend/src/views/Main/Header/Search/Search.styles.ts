import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #494c62;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  height: 50px;
  border: none;
  opacity: 0.6;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  &::placeholder {
    color: #9a9fbf;
  }
`;
