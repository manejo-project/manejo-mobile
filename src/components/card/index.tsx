import React from 'react';
import ButtonIcon from '../buttonIcon';

import { Container, Header, HeaderText, Body } from './styles';

interface ICard {
  title: string;
  children: Element;
  edit?(): void;
  remove?(): void;
  color?: 'white' | 'beige';
  size?: 'small' | 'large';
}

const Card: React.FC<ICard> = ({
  title,
  children,
  color = 'white',
  size = 'small',
  edit,
  remove,
}) => (
  <Container testID="card" size={size}>
    <Header flag={!!remove || !!edit}>
      {remove && (
        <ButtonIcon
          testID="card-remove"
          size="small"
          icon="trash"
          color="red"
          colorIcon="white"
          onPress={remove}
          style={{ position: 'absolute', right: 8, zIndex: 100 }}
        />
      )}
      {edit && (
        <ButtonIcon
          testID="card-edit"
          size="small"
          icon="pencil-alt"
          color="yellow"
          colorIcon="blue"
          onPress={edit}
          style={{ position: 'absolute', right: 8, zIndex: 100 }}
        />
      )}
      <HeaderText flag={!!remove}>{title}</HeaderText>
    </Header>
    <Body color={color}>{children}</Body>
  </Container>
);

export default Card;
