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

    <View style = {styles.Profile}>

        

        <View style = {styles.profilePic}>
        <Image style = {{width: 90, height: 90}}  
        source={require('../assets/user.png')} />
        
         <View
          style={{
            borderColor: '#2c365d',
            width: '30%',
            marginBottom:50,
            }}
          />
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

    </View>
    )
}

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    marginHorizontal: 5,
    backgroundColor: '#cbcbcb',
    height: 40,
    width: 200,
    fontSize: 16,
    borderRadius: 10,
  },
  profilePic:{
    alignItems: 'center',
  },
  profileInput:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  }
});

export default Profile;