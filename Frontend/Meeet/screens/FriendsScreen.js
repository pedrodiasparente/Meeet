import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import SearchList from '../components/SearchList'

function FriendsScreen() {
  return (
    <View style = {styles.background}>
      <Title title = {'Friends'}/>
      <View style = {styles.body}>
        <SearchList data={DATA}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex : 1,
    backgroundColor:'#ebebeb',
  },
  body: {
    alignItems: 'center',
    flex: 1,
  },
  });

  const DATA = [
    {
      id: '1',
      username: 'Joaquim Silva Silva',
    },
    {
      id: '2',
      username: 'Ricardo Esteves Esteves',
    },
    {
      id: '3',
      username: 'Paulo',
    },
    {
      id: '9',
      username: 'Joaquim',
    },
    {
      id: '4',
      username: 'Ricardo Esteves Esteves',
    },
    {
      id: '5',
      username: 'Paulo Jorge Jorge',
    },
    {
      id: '6',
      username: 'Joaquim Silva Silva',
    },
    {
      id: '7',
      username: 'Ricardo Esteves Esteves',
    },
    {
      id: '8',
      username: 'Paulo Jorge Jorge',
    },
    {
      id: '10',
      username: 'Joaquim Silva Silva',
    },
    {
      id: '11',
      username: 'Ricardo Esteves Esteves',
    },
    {
      id: '12',
      username: 'Paulo Jorge Jorge',
    },
    {
      id: '13',
      username: 'Joaquim Silva Silva',
    },
    {
      id: '14',
      username: 'Ricardo Esteves Esteves',
    },
    {
      id: '15',
      username: 'Paulo Jorge Jorge',
    },
    {
      id: '16',
      username: 'Joaquim Silva Silva',
    },
    {
      id: '17',
      username: 'Ricardo Esteves Esteves',
    },
    {
      id: '18',
      username: 'Paulo Jorge Jorge',
    },
  ];


export default FriendsScreen;
