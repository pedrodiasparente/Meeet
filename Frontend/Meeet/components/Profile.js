import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import AuthContext from '../contexts/AuthContext'

function Profile({ data }) {

  const [usernameText, setUsername] = React.useState('');
  const [emailText, setEmail] = React.useState('');
  const [cityText, setCity] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

    return (

    <>

        <View style = {styles.profilePic}>
          <Image style = {{width: '100%', height:'100%' ,resizeMode: 'contain',}}
            source={require('../assets/user.png')} />
        </View>

      <View style = {styles.profileInput}>

        <Icon
          name="user"
          size={20}
          color='#2c365d'
          />
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={data.username}
          onChangeText={setUsername}
          value={usernameText}
          />

        </View>

      <View style = {styles.profileInput}>

        <Icon
          name="envelope"
          size={20}
          color='#2c365d'
          />
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={data.email}
          onChangeText={setEmail}
          value={emailText}
          />

        </View>

      <View style = {styles.profileInput}>

        <Icon
          name="map"
          size={20}
          color='#2c365d'
          />
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={data.city}
          onChangeText={setCity}
          value={cityText}
          />

        </View>

    <View style = {styles.buttons}>

      <TouchableOpacity style={styles.button}>
        <Text style= {{color: '#fbfbfb'}}>
          Save
          </Text>
        </TouchableOpacity>

      </View>

    </>
    )
}

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    marginHorizontal: 5,
    backgroundColor: '#cbcbcb',
    height: 40,
    width: '70%',
    fontSize: 16,
    borderRadius: 10,
  },
  profilePic:{
    width: '40%',
    height: '25%',
    marginVertical: 25,
  },
  profileInput:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    alignItems: 'center',
    marginTop: 50,
    width: '40%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  }
});

export default Profile;
