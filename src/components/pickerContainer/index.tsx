import React from 'react';

import { Container } from './styles';

interface PickerProps {
  children: Element;
}

const PickerContainer: React.FC<PickerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PickerContainer;
