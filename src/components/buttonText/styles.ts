import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

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
    const { height } = Dimensions.get('screen');

    if (props.size === 'large') {
      if (height > 450 && height <= 550) {
        return css`
          height: 46px;
        `;
      }
      if (Dimensions.get('window').height <= 450) {
        return css`
          height: 42px;
        `;
      }

      return css`
        height: 50px;
      `;
    }
    if (height > 450 && height <= 550) {
      return css`
        height: 41px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        height: 37px;
      `;
    }

    return css`
      height: 45px;
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

  ${() => {
    const { height } = Dimensions.get('screen');

    if (height > 450 && height <= 550) {
      return css`
        font-size: 21px;
      `;
    }
    if (Dimensions.get('window').height <= 450) {
      return css`
        font-size: 17px;
      `;
    }
  }}
`;
