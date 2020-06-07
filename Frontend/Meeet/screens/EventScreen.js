import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { AsyncStorage } from '@react-native-comunity/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import FriendScreen from './FriendsScreen'
import ProfileScreen from './ProfileScreen'
import EventMenuScreen from './EventMenuScreen'
import ShareLocationScreen from './ShareLocationScreen'
import CreateEventScreen from './CreateEventScreen'
import FriendsMenuScreen from './FriendsMenuScreen'
import RequestFriendsScreen from './RequestFriendsScreen'
import CreateGroupScreen from './CreateGroupScreen'

const Tab = createBottomTabNavigator();

function EventScreen() {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ShareLocation" component={ShareLocationScreen} />
      </Tab.Navigator>
    )

}

const styles = StyleSheet.create({
  profileBox: {
    flex : 1,
    alignItems : 'center',
    backgroundColor:'#ebebeb',
  },
  background: {
    flex : 1,
    backgroundColor:'#ebebeb',
  },
  });

  const DATA =
    {
      id: '1',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      username: 'Joaquim Silva Silva',
      email: 'Joaquim@gmail.com',
      city: 'Califórnia',
    }
  ;

export default EventScreen;
