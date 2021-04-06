import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

interface ButtonProps {
  flag: boolean;
}
export const Container = styled.View`
  padding: 0 16px;
`;

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  height: 60px;
  margin-bottom: 8px;
`;

export const No = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-right-width: 1px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  ${props => {
    if (props.flag) {
      return css`
        background-color: #3c8dbc;
      `;
    }
    return css`
      background-color: #ffffff;
    `;
  }}
`;

export const NoText = styled.Text``;

export const Yes = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-left-width: 1px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

  ${props => {
    if (props.flag) {
      return css`
        background-color: #3c8dbc;
      `;
    }
    return css`
      background-color: #ffffff;
    `;
  }}
`;

export const YesText = styled.Text``;
