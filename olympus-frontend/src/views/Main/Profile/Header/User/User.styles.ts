import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 26px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 6px solid #fff;
  background-color: #3f4257;
  margin-bottom: 11px;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FullName = styled.div`
  line-height: 20px;
  color: #515365;
  font-size: 22px;
  font-weight: 700;
`;
