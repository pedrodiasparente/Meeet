import { View, StyleSheet} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'
import AuthContext from '../contexts/AuthContext'
import EventUsers from '../components/EventUsers'

function EventUsersScreen() {

return (
    <View style = {styles.background}>
        <Title title = {'Event Users'}/>
        <View style = {styles.body}>
        <EventUsers data={DATA}/>
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