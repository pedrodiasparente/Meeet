import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Alert, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import DateTimePickerModal from "react-native-modal-datetime-picker";


import AuthContext from '../contexts/AuthContext'
import TouchableSearchList from '../components/TouchableSearchList'
import DateInput from '../components/DateInput'

function CreateEvent({ data }) {
  const [eventName, updateEventName] = useState('');
  const [eventLongitude, updateEventLongitude] = useState('0');
  const [eventLatitude, updateEventLatitude] = useState('0');
  const [eventDate, updateEventDate] = useState('');
  const [eventTime, updateEventTime] = useState('');
  const [eventType, updateEventType] = useState('');
  const [eventAge, updateEventAge] = useState(null);
  const [eventDescription, updateEventDescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [event, setEvent] = React.useState(null);

    React.useEffect(() => {
     setEvent({
      "nome": eventName,
      "dataHora": 0,
      "longitude": eventLongitude,
      "latitude": eventLatitude,
      "tipoEvento": eventType,
      "descricao": eventDescription,
      "idadeMinima": eventAge,
    });

  },[eventName, eventDate, eventLongitude, eventLatitude, eventDescription, eventAge]);


    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.log("A date has been picked: ", date);
      hideDatePicker();
      updateEventDate(date);
    };

    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleConfirmTime = (time) => {
      console.log("A time has been picked: ", time);
      hideTimePicker();
      updateEventTime(time);
    };

    const createAlert = () =>
    Alert.alert(
      "Create Event",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => createWarning() }
      ],
      { cancelable: false }
    );

    const createWarning = () =>
    Alert.alert(
      "Event created sucessufly!",
       "",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    
 
    
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
          placeholder={"Type of event"}
          onChangeText={updateEventType}
          value={eventType}
          />

        </View>

        <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Age restriction"}
          onChangeText={updateEventAge}
          value={eventAge}
          />

        </View>

      

        <View style = {styles.description}>

        <TextInput
          style={styles.input}
          placeholder={"Description"}
          onChangeText={updateEventDescription}
          value={eventDescription}
          />

        </View>

        <View style = {styles.icons}>
          
          <TouchableOpacity >
            <Icon
            style={styles.input}
            name="globe-europe"
            size={70}
            color='#2c365d'
            />
            </TouchableOpacity>

          <TouchableOpacity onPress={showDatePicker}>
            <Icon
            name="calendar-alt"
            size={70}
            color='#2c365d'
            />
            </TouchableOpacity>
      
          <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
           />
          <TouchableOpacity onPress={showTimePicker}>
          <Icon
            name="clock"
            size={70}
            color='#2c365d'
            />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
           />
      </View>



    <View style = {styles.buttons}>

    <TouchableOpacity style={styles.buttonCreate} onPress={createAlert}>
      <Text style= {{color: '#fbfbfb'}}>
        Create
       </Text>
       </TouchableOpacity>

    </View>

    </>
    )
}

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    marginHorizontal: 5,
    backgroundColor: '#cbcbcb',
    height: 40,
    width: '70%',
    fontSize: 16,
    borderRadius: 10,
  },
  input:{
    marginLeft: 10,
  },
  profileInput:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  description:{
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#cbcbcb',
    height: '20%',
    width: '70%',
    fontSize: 16,
    borderRadius: 10,
  },
  icons: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttons: {
    alignItems: 'center',
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  },
  buttonCreate: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 45,
    margin: 40,
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
  selected: {
    backgroundColor: "hsl(85, 100%, 50%)"
  },
  list: {
    height: '52%',
    width: '100%',
  },
});


export default CreateEvent;
