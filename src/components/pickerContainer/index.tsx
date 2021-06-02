import React from 'react';

import { Container } from './styles';

interface PickerProps {
  children: Element;
}

function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
}

const PickerContainer: React.FC<PickerProps> = ({ children }) => {
  return <Container {...testProps('picker-container')}>{children}</Container>;
};

export default PickerContainer;
