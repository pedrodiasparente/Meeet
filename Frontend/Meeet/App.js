import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator();
let loginState = true;

function updateLogin(gome){
  loginState = !loginState;
  console.log(loginState);
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode= 'none'>
        {loginState ? (
          // User is not signed in
          <>
            <Stack.Screen name="Login" component={LoginScreen} initialParams={{updateLogin: updateLogin}}/>
          </>
          ) : (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
