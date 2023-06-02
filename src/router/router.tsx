import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Sphere from '../screens/calculators/Sphere';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sphere" component={Sphere}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
