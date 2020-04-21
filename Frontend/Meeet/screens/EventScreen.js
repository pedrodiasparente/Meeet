import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import AuthContext from '../contexts/AuthContext'

function EventScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style = {styles.background}>
    <Title title = {'Events'}/>
    <View style = {styles.body}>

        <View style = {styles.buttons}>


          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateEvent')}>
            <Text style= {{color: '#fbfbfb'}}>
              Create event
              </Text>
            </TouchableOpacity>

          </View>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button}>
            <Text style= {{color: '#fbfbfb'}}>
              Event invitations
              </Text>
            </TouchableOpacity>

          </View>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button}>
            <Text style= {{color: '#fbfbfb'}}>
              Ongoing events
              </Text>
            </TouchableOpacity>

          </View>
          </View>

        </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  button: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  },
  background: {
      flex : 1,
      backgroundColor:'#ebebeb',
    },
    body: {
      alignItems: 'center',
      flex: 1,
    },
});


export default EventScreen;
