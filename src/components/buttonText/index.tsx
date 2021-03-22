import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color: 'red' | 'yellow' | 'green' | 'gray';
  size: 'small' | 'large';
  disable?: boolean;
}

const ButtonText: React.FC<ButtonProps> = ({
  children,
  color,
  size,
  disable = false,
  ...rest
}) => (
  <Container
    color={color}
    size={size}
    enabled={!disable}
    disable={disable}
    {...rest}
  >
    <Text>{children}</Text>
  </Container>
);

export default ButtonText;
