import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode= 'none'>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
