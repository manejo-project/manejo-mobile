import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: white;
  margin-bottom: 8px;
  border-width: 2px;
  border-radius: 4px;
  border-color: #000000;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextDate = styled.Text`
  color: #000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin-right: 10px;
`;
