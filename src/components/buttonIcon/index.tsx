import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  icon:
    | 'plus'
    | 'pencil-alt'
    | 'trash'
    | 'spider'
    | 'times'
    | 'notes-medical'
    | 'check'
    | 'bug'
    | 'chevron-up'
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
