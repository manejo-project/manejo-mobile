import styled, { css } from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { INaturalPredator } from '.';

export const Container = styled.View`
  padding: 0 16px;
`;

export const PestList = styled(
  FlatList as new () => FlatList<INaturalPredator>,
)`
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
export const ItemListLabel = styled.View``;

export const ItemList = styled.View`
  width: 100%;
  background: white;
  margin-bottom: 8px;
  border-width: 2px;
  border-radius: 4px;
  border-color: #ffc042;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const ItemListImage = styled.Image`
  flex: 4;
  height: 100px;
`;

export const ItemListContainer = styled.View`
  flex: 6;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemListText = styled.Text`
  padding-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  max-width: 120px;
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

export const Buttons = styled.View`
  flex-direction: row;
  width: 49%;
`;
