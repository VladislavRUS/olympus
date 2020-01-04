import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 19px 0 26px;
  border-bottom: 1px solid #e6ecf5;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #515365;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

export const Content = styled.div`
  padding: 26px;
`;

export const MenuIconWrapper = styled.div`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
