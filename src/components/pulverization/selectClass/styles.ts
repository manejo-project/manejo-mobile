import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { Class } from '.';

export const Container = styled.View`
  padding: 0 16px;
`;

export const ClassList = styled(FlatList as new () => FlatList<Class>)`
  height: 340px;
`;

export const ItemList = styled(TouchableOpacity)`
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
`;

export const ItemListText = styled.Text`
  color: #000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;
