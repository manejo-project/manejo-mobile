import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import CalendarContainer from '../../components/calendarContainer';

const onEventMock = jest.fn();

describe('CalendarContainer component', () => {
  beforeEach(() => {
    onEventMock.mockClear();
  });

  it('should be able to render an calendar container', () => {
    const { getByTestId } = render(
      <CalendarContainer date={new Date()} onPress={onEventMock} />,
    );

    fireEvent(getByTestId('calendar-container'), 'press');

    expect(getByTestId('calendar-container')).toBeTruthy();
    expect(onEventMock).toHaveBeenCalled();
  });
});
