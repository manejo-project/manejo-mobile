import React from 'react';

import { fireEvent, render } from 'react-native-testing-library';
import ButtonText from '../../components/buttonText';

const onEventMock = jest.fn();

describe('ButtonText component', () => {
  beforeEach(() => {
    onEventMock.mockClear();
  });

  it('should be able to render an small button', () => {
    const { getByText } = render(
      <ButtonText color="gray" size="small">
        Text Button
      </ButtonText>,
    );
    expect(getByText('Text Button')).toBeTruthy();
  });

  it('should be able to click small button', () => {
    const { getByTestId } = render(
      <ButtonText
        testID="testBtn"
        color="gray"
        size="small"
        onPress={onEventMock}
      >
        Text Button
      </ButtonText>,
    );

    fireEvent.press(getByTestId('testBtn'));

    expect(onEventMock).toHaveBeenCalled();
  });

  it('should be able to render an large button', () => {
    const { getByText } = render(
      <ButtonText color="gray" size="large">
        Text Button
      </ButtonText>,
    );
    expect(getByText('Text Button')).toBeTruthy();
  });

  it('should be able to click large button', () => {
    const { getByTestId } = render(
      <ButtonText
        testID="testBtn"
        color="gray"
        size="large"
        onPress={onEventMock}
      >
        Text Button
      </ButtonText>,
    );

    fireEvent.press(getByTestId('testBtn'));

    expect(onEventMock).toHaveBeenCalled();
  });
});
