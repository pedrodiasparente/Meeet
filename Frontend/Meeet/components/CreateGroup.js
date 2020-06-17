import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import AuthContext from '../contexts/AuthContext'
import TouchableSearchList from '../components/TouchableSearchList'


function CreateGroup({ data }) {
  const [groupName, updateGroupName] = useState('');


  function nothing(item){
    item.isSelected = !item.isSelected;
    if(item.isSelected){
      setList(oldArray => [...oldArray, item.username]);
      item.selectedClass = styles.selected;
    }
    else{
      let auxArray= selectedList.filter(value => { return value != item.username })
      setList(auxArray);
      item.selectedClass = styles.itemPress;
    }
  }

  const { signIn } = React.useContext(AuthContext);
    const [selectedList, setList] = useState([]);

    const createWarning = () =>
    Alert.alert(
      "Group created sucessufly!",
      "",
      [{ text: "OK" }],
      { cancelable: false }
    );

    return (
    <>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder={"Group Name"}
          onChangeText={updateGroupName}
          value={groupName}
          />

      </View>

      <View style = {styles.list}>

        <TouchableSearchList 
        data={data}
        touchFunction={nothing}
        />

      </View>

      <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button} onPress={createWarning}>
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
  list: {
    height: '68%',
    width: '100%',
  },
  buttons: {
    alignItems: 'center',
    marginTop: 10,
    width: '50%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  },
  space: {
    marginVertical: 25,
  },
  selected: {
    backgroundColor: "hsl(85, 100%, 50%)"
  },
});


export default CreateGroup;