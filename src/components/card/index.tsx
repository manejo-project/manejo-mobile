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

function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
}

const Card: React.FC<ICard> = ({
  title,
  children,
  color = 'white',
  size = 'small',
  edit,
  remove,
}) => (
  <Container {...testProps('card')} size={size}>
    <Header flag={!!remove || !!edit}>
      {remove && (
        <ButtonIcon
          {...testProps('card-remove')}
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
          {...testProps('card-edit')}
          size="small"
          icon="pencil-alt"
          color="yellow"
          colorIcon="blue"
          onPress={edit}
          style={{ position: 'absolute', right: 8, zIndex: 100 }}
        />
      )}
      <HeaderText flag={!!remove} {...testProps('card-title')}>
        {title}
      </HeaderText>
    </Header>
    <Body color={color}>{children}</Body>
  </Container>
);

export default Card;
