import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import AuthContext from '../contexts/AuthContext'


function FriendsMenuScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const [data, setData] = useState([]);
  

  return (
    <View style = {styles.background}>
    <Title title = {'Friends'}/>
    <View style = {styles.body}>

        <View style = {styles.buttons}>


          <TouchableOpacity style={styles.button} >
            <Text style= {{color: '#fbfbfb'}}>
              Create group
              </Text>
            </TouchableOpacity>

          </View>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button}>
            <Text style= {{color: '#fbfbfb'}}>
              Send Request
              </Text>
            </TouchableOpacity>

          </View>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button}>
            <Text style= {{color: '#fbfbfb'}}>
              Accept Request
              </Text>
            </TouchableOpacity>

          </View>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Friends')} >
            <Text style= {{color: '#fbfbfb'}}>
              My friends
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


export default FriendsMenuScreen;
