import React from 'react';

import { fireEvent, render, waitFor } from 'react-native-testing-library';
import '@testing-library/jest-native/extend-expect';
import SearchInput from '../../components/searchInput';

describe('SearchInput component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholder } = render(
      <SearchInput placeholder="searchInputComponent" />,
    );

    expect(getByPlaceholder('searchInputComponent')).toBeTruthy();
  });

  it('should render an searchInput focus', async () => {
    const { getByPlaceholder, getByTestId } = render(
      <SearchInput placeholder="searchInputComponent" />,
    );

    const searchInputElement = getByPlaceholder('searchInputComponent');
    const containerElement = getByTestId('searchInput-container');

    fireEvent(searchInputElement, 'focus');

    await waitFor(() => {
      expect(containerElement).toHaveStyle({ borderColor: '#3c8dbc' });
    });
  });

  it('should render an searchInput blur', async () => {
    const { getByPlaceholder, getByTestId } = render(
      <SearchInput placeholder="searchInputComponent" />,
    );

    const searchInputElement = getByPlaceholder('searchInputComponent');
    const containerElement = getByTestId('searchInput-container');

    fireEvent(searchInputElement, 'blur');

    await waitFor(() => {
      expect(containerElement).toHaveStyle({ borderColor: '#000000' });
    });
  });
});
