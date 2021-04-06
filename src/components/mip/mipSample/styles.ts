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

export const ZeroValue = styled(TouchableOpacity)<ButtonProps>`
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

export const ZeroValueText = styled.Text<ButtonProps>`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  ${props => {
    if (props.flag) {
      return css`
        color: #ffffff;
      `;
    }
    return css`
      color: #000000;
    `;
  }}
`;

export const OneValue = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-left-width: 1px;

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

export const OneValueText = styled.Text<ButtonProps>`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  ${props => {
    if (props.flag) {
      return css`
        color: #ffffff;
      `;
    }
    return css`
      color: #000000;
    `;
  }}
`;

export const FiveValue = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-left-width: 1px;

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

export const FiveValueText = styled.Text<ButtonProps>`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  ${props => {
    if (props.flag) {
      return css`
        color: #ffffff;
      `;
    }
    return css`
      color: #000000;
    `;
  }}
`;

export const AnotherValue = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-left-width: 0px;
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

export const AnotherValueText = styled.Text<ButtonProps>`
  font-size: 20px;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  ${props => {
    if (props.flag) {
      return css`
        color: #ffffff;
      `;
    }
    return css`
      color: #000000;
    `;
  }}
`;

export const ModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalView = styled.View`
  background-color: #ecf0f5;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  box-shadow: 0 2px 4px black;
`;
export const ModalHeader = styled.View`
  background-color: #3c8dbc;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ModalHeaderText = styled.Text`
  color: white;
  font-size: 30px;
  font-family: 'RobotoSlab-Medium';
`;

export const ModalButton = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
`;
