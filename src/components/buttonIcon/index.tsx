import React from 'react';
import { BaseButtonProperties } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

interface ButtonProps extends BaseButtonProperties {
  icon:
    | 'plus'
    | 'pencil-alt'
    | 'trash'
    | 'spider'
    | 'times'
    | 'notes-medical'
    | 'check'
    | 'chevron-down';
  color: 'red' | 'yellow' | 'green' | 'gray' | 'white';
  colorIcon: 'blue' | 'white' | 'gray' | 'black';
  size: 'small' | 'large';
}

const ButtonIcon: React.FC<ButtonProps> = ({
  color,
  size,
  icon,
  colorIcon,
  ...rest
}) => (
  <Container color={color} size={size} {...rest}>
    <Icon name={icon} colorIcon={colorIcon} size={size === 'small' ? 25 : 35} />
  </Container>
);

export default ButtonIcon;
