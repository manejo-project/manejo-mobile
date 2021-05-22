import React from 'react';

import { fireEvent, render, waitFor } from 'react-native-testing-library';
import '@testing-library/jest-native/extend-expect';

import Input from '../../components/input';

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholder } = render(<Input placeholder="inputComponent" />);

    expect(getByPlaceholder('inputComponent')).toBeTruthy();
  });

  it('should render an input focus', async () => {
    const { getByPlaceholder, getByTestId } = render(
      <Input placeholder="inputComponent" />,
    );

    const inputElement = getByPlaceholder('inputComponent');
    const containerElement = getByTestId('input-container');

    fireEvent(inputElement, 'focus');

    await waitFor(() => {
      expect(containerElement).toHaveStyle({ borderColor: '#3c8dbc' });
    });
  });

  it('should render an input blur', async () => {
    const { getByPlaceholder, getByTestId } = render(
      <Input placeholder="inputComponent" />,
    );

    const inputElement = getByPlaceholder('inputComponent');
    const containerElement = getByTestId('input-container');

    fireEvent(inputElement, 'blur');

    await waitFor(() => {
      expect(containerElement).toHaveStyle({ borderColor: '#000000' });
    });
  });
});
