import styled, { css } from 'styled-components/native';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Product } from '.';

interface ItemListProps {
  selected: boolean;
}

export const Container = styled.View`
  padding: 0 16px;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  height: ${Dimensions.get('window').height * 0.38}px;
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
`;
