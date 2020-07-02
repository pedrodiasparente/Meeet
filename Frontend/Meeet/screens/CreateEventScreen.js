import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import CreateEvent from '../components/CreateEvent'
import AuthContext from '../contexts/AuthContext'

function CreateEventScreen( { navigation } ) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style = {styles.background}>
    <Title title = {'Create Event'}/>
    <View style = {styles.body}>
        <CreateEvent navigation={navigation}/>
      </View>

        </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flex : 1,
        backgroundColor:'#ebebeb',
      },
    body: {
        alignItems: 'center',
        flex: 1,
      },
  });

export default CreateEventScreen;
