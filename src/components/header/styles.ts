import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #3c8dbc;
  padding: 16px 32px;
  margin-bottom: 8px;
  max-height: ${Dimensions.get('window').height * 0.2}px;
`;

export const Text = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #ffffff;
  padding-top: 8px;
`;
