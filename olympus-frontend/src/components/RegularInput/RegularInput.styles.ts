import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const PlaceholderHint = styled.div<{ value: string }>`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 14px;
  opacity: 0.6;
  color: #888da8;
  font-weight: 400;
  margin-bottom: 8px;
  pointer-events: none;
  transition: top 0.1s ease;

  ${props =>
    props.value &&
    css`
      font-size: 12px;
      top: 10px;
    `};
`;

export const StyledInput = styled.input<{ value: string; isValid: boolean }>`
  width: 100%;
  padding: 0 20px;
  padding-top: ${props => (props.value ? 18 : 0)}px;
  height: 54px;
  color: #515365;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid ${props => (props.isValid ? '#d8dbe6' : 'red')};
  border-radius: 4px;
`;
