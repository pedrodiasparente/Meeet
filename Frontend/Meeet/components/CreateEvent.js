import React, { Component, createElement } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import AuthContext from '../contexts/AuthContext'
import SearchList from '../components/SearchList'

function CreateEvent({ data }) {

  const [usernameText, setUsername] = React.useState('');
  const [emailText, setEmail] = React.useState('');
  const [cityText, setCity] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

    return (
    <>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Name"}
          onChangeText={setUsername}
          value={usernameText}
          />

        </View>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Local"}
          onChangeText={setEmail}
          value={emailText}
          />

        </View>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Date"}
          onChangeText={setCity}
          value={cityText}
          />

        </View>

        
      <View style = {styles.profileInput}>

        <TextInput
         style={styles.textInput}
         textAlign={'center'}
         placeholder={"Hours"}
         onChangeText={setCity}
        value={cityText}
     />

    </View>

    

    <SearchList data={data}/>

    
    
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
  },
  body: {
    alignItems: 'center',
    flex: 1,
  },
  space: {
    marginVertical: 25,
  },
});

export default CreateEvent;
