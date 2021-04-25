import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: white;
  margin-bottom: 8px;
  border-width: 2px;
  border-radius: 4px;
  border-color: #000000;
  ${props =>
    props.isFocused &&
    css`
      border-color: #3c8dbc;
    `}
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        height: 56px;
      `;
    }
    if (height <= 450) {
      return css`
        height: 52px;
      `;
    }
  }}
`;

export const TextInput = styled.TextInput`
  color: #000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  width: 100%;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        font-size: 20px;
      `;
    }
    if (height <= 450) {
      return css`
        font-size: 16px;
      `;
    }
  }}
`;
