import React from 'react';

import { Container } from './styles';

interface PickerProps {
  children: Element;
}

const PickerContainer: React.FC<PickerProps> = ({ children }) => {
  return <Container testID="picker-container">{children}</Container>;
};

export default PickerContainer;
