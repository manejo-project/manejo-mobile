import styled, { css } from 'styled-components/native';

interface BodyProps {
  color: 'white' | 'beige';
}
export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 8px 0;
`;

export const HeaderText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #ffffff;
  padding: 4px 8px;
  max-width: 250px;
  text-align: center;
`;

export const Header = styled.View`
  width: 100%;
  background-color: #003b73;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  position: relative;
  min-height: 56px;
`;

export const Body = styled.View<BodyProps>`
  width: 100%;

  padding: 16px 8px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  ${props =>
    props.color === 'white' &&
    css`
      background-color: #ffffff;
    `}

  ${props =>
    props.color === 'beige' &&
    css`
      background-color: #fff1d6;
    `}
`;
