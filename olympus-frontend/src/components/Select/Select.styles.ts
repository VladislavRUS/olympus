import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 54px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #d8dbe6;
  border-radius: 4px;
  cursor: pointer;
`;

export const Text = styled.div`
  color: #515365;
  font-size: 14px;
  font-weight: 400;
  flex-grow: 1;
`;

export const IconWrapper = styled.div<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${props => (props.isOpened ? '180' : '0')}deg);
  transition: transform 0.2s ease;
`;
