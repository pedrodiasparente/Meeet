import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import SingleOption from '../components/SingleOption'

function UserVote({ user , votes }) {
    return (
      <View style = {styles.userVote}>
        <Image style = {styles.pic}
          source={{
            uri: user.image,
          }}
        />

        <View style = {styles.optionsBox}>
          {
            votes.map(i => <SingleOption key={i.id} option={i} userId = {user.id} />)
          }
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  userVote: {
    flexDirection : 'row',
    alignItems: 'center',
    margin: 10,
  },
  pic: {
    width: '18%',
    height:'100%' ,
    borderRadius:20000,
    borderColor: '#2c365d',
    borderWidth: 1,
    marginRight: 10,
  },
  optionsBox: {
    flexDirection : 'row',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 25,
    color: '#2c365d',
  },
  line: {
    borderColor: '#2c365d',
    borderWidth: 2,
    width: '70%',
    marginBottom: 20,
  },
  centerLine: {
    alignItems: 'center',
  },
  });

export default UserVote;
