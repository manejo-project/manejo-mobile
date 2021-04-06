import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color: 'red' | 'yellow' | 'green' | 'gray';
  size: 'small' | 'large';
  disable: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin: 8px 0;

  ${props => {
    if (props.size === 'large') {
      return css`
        height: 60px;
      `;
    }
    return css`
      height: 50px;
    `;
  }}

  ${props => {
    if (!props.disable) {
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
    }

    return css`
      background-color: #9f9faf;
    `;
  }}
`;

export const Text = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 25px;
  color: #ffffff;
`;
