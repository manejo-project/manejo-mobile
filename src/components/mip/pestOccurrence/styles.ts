import styled, { css } from 'styled-components/native';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { IPest } from '.';

export const Container = styled.View`
  padding: 0 16px;
`;

export const PestList = styled(FlatList as new () => FlatList<IPest>)`
  height: ${Dimensions.get('screen').height * 0.42}px;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        height: ${height * 0.36}px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        height: ${height * 0.27}px;
      `;
    }
  }}
`;

interface IButton {
  flag: boolean;
}

export const ModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 10px;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        height: 50px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        height: 40px;
      `;
    }
  }}
`;

export const ModalHeaderText = styled.Text`
  color: white;
  font-size: 30px;
  font-family: 'RobotoSlab-Medium';

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        font-size: 26px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        font-size: 22px;
      `;
    }
  }}
`;

export const ModalButton = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        padding: 4px 0;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        padding: 4px 0;
      `;
    }
  }}
`;

export const ItemListPestSize = styled(TouchableOpacity)<IButton>`
  width: 100%;
  height: 40px;
  background: white;
  margin-bottom: 8px;
  padding: 4px 0;
  border-width: 2px;
  border-radius: 4px;
  border-color: #000000;
  justify-content: flex-start;
  align-items: center;
  ${props => {
    if (props.flag) {
      return css`
        background-color: #3c8dbc;
      `;
    }
    return css`
      background-color: #ecf0f5;
    `;
  }}

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        height: 36px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        height: 32px;
      `;
    }
  }}
`;

export const ItemListTextPestSize = styled.Text`
  color: #000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        font-size: 20px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        font-size: 16px;
      `;
    }
  }}
`;

export const Buttons = styled.View`
  flex-direction: row;
  width: 49%;
`;
