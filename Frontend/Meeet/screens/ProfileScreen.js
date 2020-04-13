import React, { Component } from 'react'
import {StyleSheet,View,Text,Button,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import Profile from '../components/Profile'
import AuthContext from '../contexts/AuthContext'

function ProfileScreen() {

    const { signIn } = React.useContext(AuthContext);

    return (
        <View style = {styles.background}>
        <Title title = {'Profile'}/>

      <View style = {styles.profileBox}>
        <Profile data={DATA}/>
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
      username: 'Joaquim Silva Silva',
      email: 'Joaquim@gmail.com',
      city: 'Califórnia',
    }
  ;

export default ProfileScreen;
