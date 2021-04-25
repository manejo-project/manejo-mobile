import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #3c8dbc;
  padding: 16px 32px;
  margin-bottom: 8px;
  flex-grow: 1;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        padding: 12px 32px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        padding: 8px 32px;
      `;
    }
  }}
`;

export const Text = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #ffffff;
  padding-top: 8px;

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
