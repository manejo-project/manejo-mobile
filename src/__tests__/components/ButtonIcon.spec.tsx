import React from 'react';

import { fireEvent, render } from 'react-native-testing-library';
import ButtonIcon from '../../components/buttonIcon';

const onEventMock = jest.fn();

describe('ButtonIcon component', () => {
  beforeEach(() => {
    onEventMock.mockClear();
  });

  it('should be able to render a small button', () => {
    const { getByTestId } = render(
      <ButtonIcon
        testID="testButtonIcon"
        color="gray"
        colorIcon="white"
        icon="bug"
        size="small"
      />,
    );
    expect(getByTestId('testButtonIcon')).toBeTruthy();
  });

  it('should be able to click small buttonIcon', () => {
    const { getByTestId } = render(
      <ButtonIcon
        testID="testButtonIcon"
        color="gray"
        colorIcon="white"
        icon="bug"
        size="small"
        onPress={onEventMock}
      />,
    );

    fireEvent.press(getByTestId('testButtonIcon'));

    expect(onEventMock).toHaveBeenCalled();
  });

  it('should be able to render a large button', () => {
    const { getByTestId } = render(
      <ButtonIcon
        testID="testButtonIcon"
        color="gray"
        colorIcon="white"
        icon="bug"
        size="large"
      />,
    );
    expect(getByTestId('testButtonIcon')).toBeTruthy();
  });

  it('should be able to click large buttonIcon', () => {
    const { getByTestId } = render(
      <ButtonIcon
        testID="testButtonIcon"
        color="gray"
        colorIcon="white"
        icon="bug"
        size="large"
        onPress={onEventMock}
      />,
    );

    fireEvent.press(getByTestId('testButtonIcon'));

    expect(onEventMock).toHaveBeenCalled();
  });
});
