import React, { Component } from 'react'
import {StyleSheet,View,Text,Button,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import Profile from '../components/Profile'
import AuthContext from '../contexts/AuthContext'

function ProfileScreen( {route} ) {

    const { signIn } = React.useContext(AuthContext);

    const { id } = route.params;

    return (
        <View style = {styles.background}>
        <Title title = {'Profile'}/>

      <View style = {styles.profileBox}>
        <Profile id={id}/>
      </View>
    </View>
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

export default ProfileScreen;
