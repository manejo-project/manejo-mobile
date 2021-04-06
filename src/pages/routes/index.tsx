import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mip from '../Mip';
import Pulverization from '../Pulverization';
import Dashboard from '../Dashboard';

const Navi = createStackNavigator();

const Routes: React.FC = () => (
  <Navi.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#ECF0F5' },
    }}
  >
    <Navi.Screen name="Dashboard" component={Dashboard} />
    <Navi.Screen name="Mip" component={Mip} />
    <Navi.Screen name="Pulverization" component={Pulverization} />
  </Navi.Navigator>
);

export default Routes;
