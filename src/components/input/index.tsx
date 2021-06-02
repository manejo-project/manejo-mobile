import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  function testProps(id: string) {
    return { testID: id, accessibilityLabel: id };
  }

  return (
    <Container {...testProps('input-container')} isFocused={isFocused}>
      <TextInput
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
