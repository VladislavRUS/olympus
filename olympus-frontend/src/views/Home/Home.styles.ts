import styled from 'styled-components';
import logoImg from '../../assets/images/logo.svg';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: #ff5e3a;
  padding-left: 126px;
  padding-right: 200px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logoImg,
})`
  position: absolute;
  left: 100px;
  top: 40px;
`;
