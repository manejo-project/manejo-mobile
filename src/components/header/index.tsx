import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ButtonText from '../buttonText';

import { Container, Text } from './styles';

interface IHeader {
  children: string;
}

function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
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
      <Text {...testProps('header-title')}>{children}</Text>
    </Container>
  );
};
export default Header;
