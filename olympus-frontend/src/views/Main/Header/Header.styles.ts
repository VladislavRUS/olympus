import styled from 'styled-components';
import logoImg from '../../../assets/images/logo.svg';

export const Wrapper = styled.div`
  height: 70px;
  background-color: #3f4257;
  display: flex;
  padding-right: 70px;
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ff5e3a;
  flex-shrink: 0;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: 34px 34px;
  background-position: center center;
`;

export const PageTitle = styled.div`
  padding-left: 30px;
  width: 230px;
  height: 100%;
  line-height: 70px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.28px;
  flex-shrink: 0;
`;
