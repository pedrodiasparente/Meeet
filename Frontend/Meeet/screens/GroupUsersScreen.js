import { View, StyleSheet, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'

import Title from '../components/Title'
import EventUsers from '../components/EventUsers'

function GroupUsersScreen({ navigation,route }) {
  const { id } = route.params;
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      console.log("oi" + id);
    fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getUserGruposPerGroup/' + id, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => {return response.json(); } )
    .then(json => {
      setUsers(json);
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  
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


export default GroupUsersScreen;