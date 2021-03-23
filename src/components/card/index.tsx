import React from 'react';
import ButtonIcon from '../buttonIcon';

import { Container, Header, HeaderText, Body } from './styles';

interface ICard {
  title: string;
  children: Element;
  edit?(): void;
  remove?(): void;
  color?: 'white' | 'beige';
}

const Card: React.FC<ICard> = ({
  title,
  children,
  color = 'white',
  edit,
  remove,
}) => (
  <Container>
    <Header>
      {remove && (
        <ButtonIcon
          size="small"
          icon="trash"
          color="red"
          colorIcon="white"
          onPress={remove}
          style={{ position: 'absolute', right: 8 }}
        />
      )}
      {edit && (
        <ButtonIcon
          size="small"
          icon="pencil-alt"
          color="yellow"
          colorIcon="blue"
          onPress={edit}
          style={{ position: 'absolute', right: 8 }}
        />
      )}
      <HeaderText>{title}</HeaderText>
    </Header>
    <Body color={color}>{children}</Body>
  </Container>
);

export default Card;
