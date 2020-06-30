import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { AsyncStorage } from '@react-native-comunity/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import FirstVoteScreen from './FirstVoteScreen'


const Stack = createStackNavigator();

function VotesScreen() {

    return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="VoteOptions" component={FirstVoteScreen} />
    </Stack.Navigator>
  )
}


export default VotesScreen;
