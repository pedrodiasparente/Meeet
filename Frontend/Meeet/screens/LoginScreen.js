import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Login from '../components/Login'

class LoginScreen extends Component {

  render() {
    return (

      <View style = {styles.loginBox}>
        <Image style = {styles.logo} source={require('../assets/meeetLogoDark.png')} />
        <View
          style={{
            borderColor: '#ac5b27',
            borderWidth: 2,
            width: '70%',
            marginBottom: 50,
            }}
          />
        <Login/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  loginBox: {
    flex : 1,
    alignItems : 'center',
    backgroundColor:'#2e2e2e',
  },
  logo: {
    resizeMode: 'contain',
    width: '90%',
    height: '40%',
  },
  });

export default LoginScreen;
