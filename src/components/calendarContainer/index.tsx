import React from 'react';
import { Image } from 'react-native';
import { BaseButtonProperties } from 'react-native-gesture-handler';

import iconCalendar from '../../assets/icon_calendar.png';

import { Container, TextDate } from './styles';

interface ICalendarProps extends BaseButtonProperties {
  date: Date;
  onPress?(): void;
}

const CalendarContainer: React.FC<ICalendarProps> = ({ date, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TextDate>
        {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
      </TextDate>
      <Image source={iconCalendar} />
    </Container>
  );
};

export default CalendarContainer;
