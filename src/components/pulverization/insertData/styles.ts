import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  padding: 0 16px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  width: 49%;
`;

export const Cards = styled.View`
  height: 480px;
  align-items: center;
  justify-content: center;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalView = styled.View`
  width: 338px;
  border-radius: 4px;
`;

export const HeaderView = styled.View`
  background-color: #3c8dbc;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const ModalText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`;

export const BodyView = styled.View`
  background-color: #ffffff;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ButtonsYesNo = styled.View`
  width: 100%;
  flex-direction: row;
  height: 60px;
  margin-bottom: 8px;
`;

export const No = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-right-width: 1px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const NoText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 22px;
`;

export const Yes = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #3c8dbc;
  border-width: 2px;
  border-left-width: 1px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const YesText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 22px;
`;
