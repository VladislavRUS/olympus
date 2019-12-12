import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 34vw;
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 44px;
`;

export const Subtitle = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 63px;
`;

export const RegisterButton = styled.div`
  width: 200px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  color: #fff;
  border: 2px solid #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.28px;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    color: #ff5e3a;
    background-color: #fff;
  }
`;
