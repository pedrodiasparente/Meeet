import { View, StyleSheet, SafeAreaView, FlatList} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'
import UserVote from '../components/UserVote'
import AuthContext from '../contexts/AuthContext'

function VoteScreen() {

return (
    <View style = {styles.background}>
        <Title title = {'Vote'}/>
        <View style = {styles.body}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={USERDATA}
              renderItem={({ item }) => <UserVote votes={OPTIONSDATA} user= {item} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
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


const DATA = {"id":1,"nome":"evento1","dataHora":"2014-01-01T00:00:00","longitude":0,"latitude":0,"tipoEvento":0,"idAdmin":1,"descricao":"é um evento muito giro","idadeMinima":null,"idAdminNavigation":null,"eventoHasRequests":[],"utilizadorEvento":[],"votacao":[]}

const OPTIONSDATA = [
    {id:0, users: [1,2,5,7,9], name: "15:00" },
    {id:1, users: [0,1,2,3,4,5,6,7,8,9,10], name: "16:00"},
    {id:2, users: [0,2,3,5,8,9,10], name: "17:00"} ,
    {id:3, users: [1,2,5,7,9], name: "18:00"} ,
];


const USERDATA = [
    {id:0, name: "Mark Doe", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
    {id:1, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
    {id:2, name: "Clark Man", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
    {id:3, name: "Jaden Boor", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
    {id:4, name: "Srick Tree", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    {id:5, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
    {id:6, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
    {id:8, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
    {id:9, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    {id:10, name: "John Doe", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
  ];

export default VoteScreen;
