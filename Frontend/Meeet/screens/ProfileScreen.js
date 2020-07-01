import React, { Component } from 'react'
import {StyleSheet,View,Text,Button,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import Profile from '../components/Profile'


function ProfileScreen() {

    return (
        <View style = {styles.background}>
        <Title title = {'Profile'}/>

      <View style = {styles.profileBox}>
        <Profile/>
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


export default ProfileScreen;
