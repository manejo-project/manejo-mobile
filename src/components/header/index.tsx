import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ButtonText from '../buttonText';

import { Container, Text } from './styles';

interface IHeader {
  children: string;
}

const Header: React.FC<IHeader> = ({ children, ...rest }) => {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      <ButtonText
        color="red"
        size="large"
        onPress={() => {
          navigation.goBack();
        }}
      >
        Cancelar
      </ButtonText>
      <Text>{children}</Text>
    </Container>
  );
};
export default Header;
