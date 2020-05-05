import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import AuthContext from '../contexts/AuthContext'
import TouchableSearchList from '../components/TouchableSearchList'
import DateInput from '../components/DateInput'

function CreateEvent({ data }) {
  const [eventName, updateEventName] = useState('');
  const [eventLocation, updateEventLocation] = useState('');
  const [eventDate, updateEventDate] = useState({day: '', month: '', year: ''});
  const [eventTime, updateEventTime] = useState('');

  function nothing(item){
    item.isSelected = !item.isSelected;
    if(item.isSelected){
      setList(oldArray => [...oldArray, item.username]);
    }
    else{
      let auxArray= selectedList.filter(value => { return value != item.username })
      console.log('AUX:' + auxArray);
      setList(auxArray);
    }
    console.log(selectedList);
    //console.log('Is ' + item.username + ' Selected? ' + item.isSelected);
  }

  const { signIn } = React.useContext(AuthContext);
    const [selectedList, setList] = useState([]);

    return (
    <>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Name"}
          onChangeText={updateEventName}
          value={eventName}
          />

        </View>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Local"}
          onChangeText={updateEventLocation}
          value={eventLocation}
          />

        </View>

      <DateInput
        change={updateEventDate}
        date={eventDate}
        />

      <View style = {styles.profileInput}>

        <TextInput
         style={styles.textInput}
         textAlign={'center'}
         placeholder={"Hours"}
         onChangeText={updateEventTime}
         value={eventTime}
     />

    </View>



    <TouchableSearchList data={data} touchFunction={nothing}/>



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
