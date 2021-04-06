import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: white;
  margin-bottom: 8px;
  border-width: 2px;
  border-radius: 4px;
  border-color: #000000;
  ${props =>
    props.isFocused &&
    css`
      border-color: #3c8dbc;
    `}
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: #000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  width: 100%;
`;
