import React from 'react';
import ButtonText from '../buttonText';

import { Container, Text } from './styles';

interface IHeader {
  children: string;
  onPressCancel(): void;
}

const Header: React.FC<IHeader> = ({ onPressCancel, children, ...rest }) => (
  <Container {...rest}>
    <ButtonText color="red" size="large" onPress={onPressCancel}>
      Cancelar
    </ButtonText>
    <Text>{children}</Text>
  </Container>
);

export default Header;
