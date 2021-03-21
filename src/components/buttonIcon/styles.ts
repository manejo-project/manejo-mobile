import styled, { css } from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ContainerProps {
  color: 'red' | 'yellow' | 'green' | 'gray' | 'white';
  size: 'small' | 'large';
}

interface IconProps {
  colorIcon: 'blue' | 'white' | 'gray' | 'black';
}

export const Container = styled(BaseButton)<ContainerProps>`
  justify-content: center;
  align-items: center;

  ${props => {
    if (props.size === 'large') {
      return css`
        height: 60px;
        width: 60px;
        border-radius: 30px;
      `;
    }
    return css`
      height: 44px;
      width: 44px;
      border-radius: 22px;
    `;
  }}

  ${props => {
    if (props.color === 'red') {
      return css`
        background-color: #d14a61;
      `;
    }
    if (props.color === 'yellow') {
      return css`
        background-color: #ffc042;
      `;
    }
    if (props.color === 'green') {
      return css`
        background-color: #00da6d;
      `;
    }
    if (props.color === 'gray') {
      return css`
        background-color: #c4c4c4;
      `;
    }
    return css`
      background-color: #ffffff;
    `;
  }}
`;

export const Icon = styled(FontAwesome5)<IconProps>`
  ${props => {
    if (props.colorIcon === 'blue') {
      return css`
        color: #003b73;
      `;
    }
    if (props.colorIcon === 'white') {
      return css`
        color: #ffffff;
      `;
    }
    if (props.colorIcon === 'gray') {
      return css`
        color: #ecf0f5;
      `;
    }
    return css`
      color: #000000;
    `;
  }}
`;
