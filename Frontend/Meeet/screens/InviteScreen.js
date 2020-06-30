import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Title from '../components/Title'
import AuthContext from '../contexts/AuthContext'
import TouchableSearchList from '../components/TouchableSearchList'

function InviteScreen() {
  const [selectedList, setList] = useState([]);
  const [groupName, updateGroupName] = useState('');
  const [group, setGroup] = React.useState(null);
  const [res, setRes] = React.useState(null);

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
    console.log(selectedList);
    console.log(groupName);
  }

  React.useEffect(() => {
    setGroup({
      "nome": groupName,
      "utilizadorGrupo": null,
  });
  },[groupName]);

    async function createGroup() {
        fetch('https://meeet-projeto.azurewebsites.net/api/meeet/PostGrupo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
      })
      .then((response) => response.json())
      .then((json) => {
        setRes(json);
        console.log(JSON.stringify(res));
        createWarning();
      })
      .catch((error) => {
        console.error(error);
      });
    };



    async function addToGroup(id) {
      fetch('https://meeet-projeto.azurewebsites.net/api/meeet/AddToGroup' + id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(res)
    })
    .catch((error) => {
      console.error(error);
    });
  };


    const createWarning = () =>
    Alert.alert(
      "Group created sucessufly!",
      "",
      [{ text: "OK" }],
      { cancelable: false }
    );

  return (
    <View style = {styles.background}>
    <Title title = {'Invite Friends'}/>
    <View style = {styles.body}>

      <View style = {styles.list}>

        <TouchableSearchList
          data={data}
          touchFunction={nothing}
        />

      </View>

      <View style = {styles.buttons}>

        <TouchableOpacity style={styles.button} onPress={() => createGroup()}>
          <Text style= {{color: '#fbfbfb'}}>
            Create
            </Text>
          </TouchableOpacity>

        </View>
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

  const data = [
    {
      id: '1',
      username: 'Joaquim Silva Silva',
      image:"https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: '2',
      username: 'Ricardo Esteves Esteves',
      image:"https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: '3',
      username: 'Ricardinho',
    },
    {
      id: '9',
      username: 'Rui Costa',
    },
    {
      id: '4',
      username: 'Rivaldo Esteves Esteves',
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

export default InviteScreen;
