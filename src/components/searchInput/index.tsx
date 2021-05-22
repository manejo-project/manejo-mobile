import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

const SearchInput: React.FC<TextInputProps> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container testID="searchInput-container" isFocused={isFocused}>
      <TextInput
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      <Icon name="search" size={20} color="#BEBCCC" isFocused={isFocused} />
    </Container>
  );
};

export default SearchInput;
