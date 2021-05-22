import React from 'react';

import { fireEvent, render } from 'react-native-testing-library';
import Header from '../../components/header';

const mockedNavigationBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockedNavigationBack,
    }),
  };
});

describe('Header component', () => {
  it('should be able to render an header', () => {
    const { getByText } = render(<Header>Text Header</Header>);
    expect(getByText('Text Header')).toBeTruthy();
  });

  it('should be able to click cancel header', () => {
    const { getByText } = render(<Header>Text Header</Header>);

    fireEvent.press(getByText('Cancelar'));

    expect(mockedNavigationBack).toHaveBeenCalled();
  });
});
