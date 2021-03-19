import React from 'react';
import { StatusBar, View } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3C8DBC" />
      <View style={{ flex: 1, backgroundColor: '#3C8DBC' }} />
    </>
  );
};

export default App;
