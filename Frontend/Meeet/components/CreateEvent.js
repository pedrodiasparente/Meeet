import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import DateTimePickerModal from "react-native-modal-datetime-picker";


import AuthContext from '../contexts/AuthContext'
import TouchableSearchList from '../components/TouchableSearchList'
import DateInput from '../components/DateInput'

function CreateEvent({ data }) {
  const [eventName, updateEventName] = useState('');
  const [eventLocation, updateEventLocation] = useState('');
  const [eventDate, updateEventDate] = useState('');
  const [eventTime, updateEventTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  function nothing(item){
    item.isSelected = !item.isSelected;
    if(item.isSelected){
      setList(oldArray => [...oldArray, item.username]);
      item.selectedClass = styles.selected;
    }
    else{
      let auxArray= selectedList.filter(value => { return value != item.username })
      //console.log('AUX:' + auxArray);
      setList(auxArray);
      item.selectedClass = styles.itemPress;
    }
    console.log(selectedList);
    console.log('Is ' + item.username + ' Selected? ' + item.isSelected);
  }

  const { signIn } = React.useContext(AuthContext);
    const [selectedList, setList] = useState([]);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.log("A date has been picked: ", date);
      hideDatePicker();
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
    };

    
 
    
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


        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button} onPress={showDatePicker}>
            <Text style= {{color: '#fbfbfb'}}>
               Date
            </Text>
            </TouchableOpacity>
      
          <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
           />
          <TouchableOpacity style={styles.button}  onPress={showTimePicker}>
            <Text style= {{color: '#fbfbfb'}}>
               Hours
            </Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
           />
    </View>


    <View style = {styles.list}>

      <TouchableSearchList 
       data={data} 
       touchFunction={nothing}
      />

    </View>

    <View style = {styles.buttons}>

    <TouchableOpacity style={styles.buttonCreate}>
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
  profileInput:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    alignItems: 'center',
    width: '70%',
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
    margin: 15,
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
    height: '40%',
    width: '100%',
  },
});


export default CreateEvent;
