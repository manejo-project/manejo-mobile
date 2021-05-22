/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({
    children,
  }: {
    children: React.ReactNode;
  }) => children;
  return { KeyboardAwareScrollView };
});

jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

jest.mock('react-native-vector-icons/Feather', () => 'Ionicons');

jest.mock('@react-native-picker/picker', () => {
  const React = require('react');
  class Picker extends React.Component {
    static Item = (props: { children: never }) => {
      return React.createElement('Item', props, props.children);
    };

    render() {
      return React.createElement('Picker', this.props, this.props.children);
    }
  }
  return {
    Picker,
  };
});

jest.mock('@react-native-community/datetimepicker', () => {
  const mockComponent = require('react-native/jest/mockComponent');
  return mockComponent('@react-native-community/datetimepicker');
});

jest.mock('react-native-chart-kit', () => ({
  ProgressChart: () => null,
}));
