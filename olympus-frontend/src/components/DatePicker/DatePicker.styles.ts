import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

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

export const Date = styled.div`
  color: #515365;
  font-size: 14px;
  font-weight: 400;
  flex-grow: 1;
`;

export const ReactDatePickerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Placeholder = styled.div`
  color: #515365;
  font-size: 14px;
  font-weight: 400;
  flex-grow: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
