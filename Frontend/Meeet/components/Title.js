import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'


function Title({ title }) {
    return (

      <View style = {styles.title}>
        <Image style = {styles.logo} source={require('../assets/meeetIcon.png')} />
          <View style = {styles.textBox}>
            <Text style= {styles.text}>{title}</Text>
          </View>
        </View>

    )
}

const styles = StyleSheet.create({
  title: {
    flexDirection : 'row',
    alignItems: 'center',
    flex: 0.2,
  },
  logo: {
    resizeMode: 'contain',
    marginHorizontal: 20,
    width: '15%',
    height: '100%',
  },
  textBox: {
    justifyContent: 'center',
    borderRadius: 10,
    height: '50%',
    width: '85%',

  },
  text: {
    fontSize: 25,
    color: '#2c365d',
  },
  });

export default Title;
