import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  size: 'small' | 'large';
}

interface BodyProps {
  color: 'white' | 'beige';
}

interface HeaderProps {
  flag: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 8px 0;
`;

export const HeaderText = styled.Text<HeaderProps>`
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #ffffff;
  padding: 4px 8px;
  width: 100%;
  text-align: center;

  ${props =>
    props.flag &&
    css`
      text-align: left;
    `}

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        font-size: 22px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        font-size: 18px;
      `;
    }
  }}
`;

export const Header = styled.View<HeaderProps>`
  width: 100%;
  background-color: #003b73;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  position: relative;

  ${props =>
    props.flag &&
    css`
      padding: 8px;
    `}
`;

export const Body = styled.View<BodyProps>`
  width: 100%;
  padding: 16px 8px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        padding: 12px 8px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        padding: 8px 8px;
      `;
    }
  }}

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
