import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import MapView from 'react-native-maps'

import Title from '../components/Title'
import AuthContext from '../contexts/AuthContext'


function ShareLocationScreen({ navigation }) {
  const [data, setData] = useState([]);

  return (
    <View style = {styles.background}>

      <Title title = {'Location Sharing'}/>

      <View style = {styles.body}>

      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 41.56016,
            longitude: -8.3990428,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
        </MapView>
       </View>

        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style= {{color: '#fbfbfb'}}>
              Exit
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
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  },
  background: {
    flex : 1,
    backgroundColor:'#ebebeb',
  },
  body: {
    marginTop: 60,
    alignItems: 'center',
    flex: 1,
  },
  container: {
   height: "50%",
   width: "90%",
   borderRadius: 50,
   borderWidth: 2,
   borderColor: "#2c365d",
   justifyContent: 'flex-end',
   alignItems: 'center',
   overflow: 'hidden'
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
});


export default ShareLocationScreen;
