import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Card from '../../components/card';

const onEventMock = jest.fn();

describe('Card component', () => {
  beforeEach(() => {
    onEventMock.mockClear();
  });
  it('should be able to render a card', () => {
    const { getByTestId } = render(
      <Card title="test-title" edit={onEventMock}>
        test-body
      </Card>,
    );

    const card = getByTestId('card');

    expect(card).toBeTruthy();
  });
  it('should be able to render a card with edit button', () => {
    const { getByTestId } = render(
      <Card title="test-title" edit={onEventMock}>
        test-body
      </Card>,
    );

    const button = getByTestId('card-edit');
    fireEvent(button, 'press');

    expect(button).toBeTruthy();
    expect(onEventMock).toHaveBeenCalled();
  });
  it('should be able to render a card with remove button', () => {
    const { getByTestId } = render(
      <Card title="test-title" remove={onEventMock}>
        test-body
      </Card>,
    );

    const button = getByTestId('card-remove');
    fireEvent(button, 'press');

    expect(button).toBeTruthy();
    expect(onEventMock).toHaveBeenCalled();
  });
});
