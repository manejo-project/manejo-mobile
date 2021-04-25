import styled, { css } from 'styled-components/native';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Target } from '.';

interface ItemListProps {
  selected: boolean;
}

export const Container = styled.View`
  padding: 0 16px;
`;

export const TargetList = styled(FlatList as new () => FlatList<Target>)`
  height: ${Dimensions.get('screen').height * 0.42}px;

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        height: ${height * 0.3}px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        height: ${height * 0.27}px;
      `;
    }
  }}
`;

export const ItemList = styled(TouchableOpacity)<ItemListProps>`
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

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        height: 36px;
        margin-bottom: 4px;
        padding: 2px 0;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        height: 32px;
        margin-bottom: 2px;
        padding: 2px 0;
      `;
    }
  }}

  ${props => {
    if (props.selected) {
      return css`
        background-color: #3c8dbc;
      `;
    }
    return css`
      background-color: #ffffff;
    `;
  }}
`;

export const ItemListText = styled.Text`
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
