import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isValid: boolean }>`
  width: 100%;
  position: relative;
  height: 54px;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #d8dbe6;
  border-radius: 4px;

  ${props =>
    !props.isValid &&
    css`
      border: 1px solid red;
    `}
`;

export const PlaceholderHint = styled.div`
  opacity: 0.6;
  color: #888da8;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  color: #515365;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  border: none;

  &::placeholder {
    opacity: 0.6;
    color: #888da8;
  }
`;
