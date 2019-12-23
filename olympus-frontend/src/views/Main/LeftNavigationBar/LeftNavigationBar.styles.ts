import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  width: 70px;
  padding: 40px 0;
  background-color: #fff;
  flex-shrink: 0;
  box-shadow: 1px 0 1px 0 #e6ecf5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  & + & {
    margin-top: 24px;
  }
`;
