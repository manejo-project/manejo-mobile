import React from 'react';

import { Container, Header, HeaderText, Body } from './styles';

interface ICard {
  title: string;
  children: Element;
}

const Card: React.FC<ICard> = ({ title, children }) => (
  <Container>
    <Header>
      <HeaderText>{title}</HeaderText>
    </Header>
    <Body>{children}</Body>
  </Container>
);

export default Card;
