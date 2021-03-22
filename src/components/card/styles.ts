import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 8px 0;
`;

export const HeaderText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 25px;
  color: #ffffff;
  padding: 4px 8px;
`;

export const Header = styled.View`
  width: 100%;
  background-color: #003b73;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const Body = styled.View`
  width: 100%;
  background-color: #ffffff;
  padding: 16px 8px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
