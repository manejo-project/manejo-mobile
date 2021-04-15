import styled, { css } from 'styled-components/native';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { IPest } from '.';

export const Container = styled.View`
  padding: 0 16px;
`;

export const PestList = styled(FlatList as new () => FlatList<IPest>)`
  height: ${Dimensions.get('window').height * 0.38}px;
`;

interface IButton {
  flag: boolean;
}

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
  margin-bottom: 10px;
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
`;

export const ItemListTextPestSize = styled.Text`
  color: #000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const Buttons = styled.View`
  flex-direction: row;
  width: 49%;
`;
