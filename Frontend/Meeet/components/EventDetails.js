import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'

import AuthContext from '../contexts/AuthContext'


function EventDetails({ data }) {


    return (
    <>

      <View style = {styles.profileInput}>

        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          />

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
});


export default EventDetails;