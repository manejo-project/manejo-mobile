import styled, { css } from 'styled-components/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  width: 100%;
  padding-left: 16px;
  padding-right: 32px;
  margin-bottom: 8px;
  border-width: 1px;
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
`;

export const TextInput = styled.TextInput`
  color: #000;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  width: 100%;
  padding: 4px 0;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        font-size: 14px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        font-size: 14px;
      `;
    }
  }}
`;

export const Icon = styled(FontAwesome5)<ContainerProps>`
  position: absolute;
  right: 8px;

  ${props =>
    props.isFocused &&
    css`
      color: #3c8dbc;
    `}
`;
