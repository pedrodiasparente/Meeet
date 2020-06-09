import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'


function SingleOption({ userId , option }) {
    let selected = option.users.includes(userId);
    return (
      <View style = {{backgroundColor: selected ? '#4b6937' : '#9c3d3d', margin: 5, borderRadius:10, overflow:'hidden'}}>
        <View style={{height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{option.name}</Text>
        </View>
      </View>
    )
}


export default SingleOption;
