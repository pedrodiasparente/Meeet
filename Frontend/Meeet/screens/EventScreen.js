import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { AsyncStorage } from '@react-native-comunity/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import EventDetailsScreen from './EventDetailsScreen'
import VoteScreen from './VoteScreen'
import EventUserScreen from './EventUsersScreen'
import ShareLocationScreen from './ShareLocationScreen'


const Tab = createBottomTabNavigator();



function EventScreen() {

  useEffect(() => {
    fetch('https://meeet-app.azurewebsites.net/api/meeet/getuser/' + id)
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => { setLoading(false); console.log(userData); } );
    }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="EventDetails" component={EventDetailsScreen} />
      <Tab.Screen name="EventUsers" component={EventUsersScreen} />
      <Tab.Screen name="ShareLocation" component={ShareLocationScreen} />
      <Tab.Screen name="Vote" component={VoteScreen} />
    </Tab.Navigator>
  )

}

const styles = StyleSheet.create({
  profileBox: {
    flex : 1,
    alignItems : 'center',
    backgroundColor:'#ebebeb',
  },
  background: {
    flex : 1,
    backgroundColor:'#ebebeb',
  },
  });

  const DATA =
    {
      id: '1',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      username: 'Joaquim Silva Silva',
      email: 'Joaquim@gmail.com',
      city: 'Califórnia',
    }
  ;

let event = {"id":1,"nome":"evento1","dataHora":"2014-01-01T00:00:00","longitude":0,"latitude":0,"tipoEvento":0,"idAdmin":1,"descricao":"é um evento muito giro","idadeMinima":null,"idAdminNavigation":null,"eventoHasRequests":[],"utilizadorEvento":[],"votacao":[]}

export default EventScreen;
