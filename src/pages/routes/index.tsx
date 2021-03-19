import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mip from '../Mip';
import Pulverization from '../Pulverization';

const Navi = createStackNavigator();

const Routes: React.FC = () => (
  <Navi.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#ECF0F5'}
    }}
  >
    <Navi.Screen name="Mip" component={Mip}/>
    <Navi.Screen name="Pulverization" component={Pulverization}/>
  </Navi.Navigator>
)

export default Routes;
