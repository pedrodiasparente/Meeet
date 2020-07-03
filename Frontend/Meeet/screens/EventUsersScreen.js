import { View, StyleSheet, ActivityIndicator} from 'react-native'
import React, { Component, useState, useEffect } from 'react'

import Title from '../components/Title'
import EventContext from '../contexts/EventContext'
import EventUsers from '../components/EventUsers'

function EventUsersScreen({ navigation }) {
  const { evento } = React.useContext(EventContext);

  const [userEvents, setUserEvents] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getUserEventosPerEvent/' + evento.id, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { console.log(JSON.stringify(response)); return response.json(); } )
    .then(json => {
      setUserEvents(json);
    })
    .catch((error) => {
      console.error('ERROR:' + error);
    });
  }, []);

  useEffect(() => {
    fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getUsersPerEvent', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userEvents)
    })
    .then((response) => { console.log(JSON.stringify(response)); return response.json()} )
    .then((json) => {
      console.log(JSON.stringify(json));
      setUsers(json);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [userEvents]);

  useEffect(() => {
    if(users.length > 0)
      setIsLoading(false);
  }, [users]);

return (
    <View style = {styles.background}>
        <Title title = {'Event Users'}/>
        <View style = {styles.body}>
        { isLoading ? <ActivityIndicator/> : <EventUsers data={users} navigation={navigation}/> }
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
    {id:1, name: "Mark Doe", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
    {id:1, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
    {id:2, name: "Clark Man", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
    {id:3, name: "Jaden Boor", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
    {id:4, name: "Srick Tree", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    {id:5, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
    {id:6, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
    {id:8, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
    {id:9, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    {id:9, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
  ];

export default EventUsersScreen;
