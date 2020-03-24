import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login'


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <View style = {styles.loginBox}>
        <Image style = {styles.logo} source={require('./assets/meeetLogo.png')} />
        <Login style = {styles.login} />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loginBox: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  logo: {
    flex : 1,
    resizeMode: 'contain',
    height: 300,
    width: 600,
  },
  login: {

  }
});

export default App;
