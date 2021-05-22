import { render } from '@testing-library/react-native';
import React from 'react';
import PickerContainer from '../../components/pickerContainer';

const mockOnPress = jest.fn();

describe('PickerContainer component', () => {
  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('should be able to render an picker container', () => {
    const { getByTestId } = render(
      <PickerContainer>test picker</PickerContainer>,
    );

    expect(getByTestId('picker-container')).toBeTruthy();
  });
});
