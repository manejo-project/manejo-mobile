import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './pages/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#3C8DBC" />
      <View style={{ flex: 1, backgroundColor: '#3C8DBC' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
