import { View, StyleSheet, SafeAreaView, Text,FlatList, useState,TouchableOpacity} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'
import UserVote from '../components/UserVote'


function VoteScreen() {

  const [v1, setV1] = React.useState(false);
  const [v2, setV2] = React.useState(false);
  const [v3, setV3] = React.useState(false);
  const [v4, setV4] = React.useState(false);



return (
    <View style = {styles.background}>
        <Title title = {'Vote'}/>
        <View style = {styles.body}>
          <Text>
              Opção 1 -> blalbla{"\n"}
              Opção 2 -> blalbla{"\n"}
              Opção 3 -> blalbla{"\n"}
              Opção 4 -> blalbla
              </Text>


          <SafeAreaView style={{...styles.container,marginTop:20,height:'62%'}}>
            <FlatList
              data={USERDATA}
              renderItem={({ item }) => <UserVote votes={OPTIONSDATA} user= {item} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>



          <View style={styles.textSide}>
          <TouchableOpacity onPress={() => v1 ? setV1(false) : setV1(true)}>
          <View style = {{backgroundColor: v1 ? '#4b6937' : '#9c3d3d' , margin: 5, borderRadius:10, overflow:'hidden'}}>
              <View style={{height: 50, width: 70, alignItems: 'center', justifyContent: 'center'}}>
               <Text>Opção 1</Text>
               
               
              </View>
           </View>
           </TouchableOpacity>



           <TouchableOpacity onPress={() => v2 ? setV2(false) : setV2(true)}>
          <View style = {{backgroundColor: v2 ? '#4b6937' : '#9c3d3d' , margin: 5, borderRadius:10, overflow:'hidden'}}>
              <View style={{height: 50, width: 70, alignItems: 'center', justifyContent: 'center'}}>
               <Text>Opção 2</Text>
              </View>
           </View>
           </TouchableOpacity>



           <TouchableOpacity onPress={() => v3 ? setV3(false) : setV3(true)}>
          <View style = {{backgroundColor: v3 ? '#4b6937' : '#9c3d3d' , margin: 5, borderRadius:10, overflow:'hidden'}}>
              <View style={{height: 50, width: 70, alignItems: 'center', justifyContent: 'center'}}>
               <Text>Opção 3</Text>
              </View>
           </View>
           </TouchableOpacity>



           <TouchableOpacity onPress={() => v4 ? setV4(false) : setV4(true)}>
          <View style = {{backgroundColor: v4 ? '#4b6937' : '#9c3d3d' , margin:5, borderRadius:10, overflow:'hidden'}}>
              <View style={{height: 50, width: 70, alignItems: 'center', justifyContent: 'center'}}>
               <Text>Opção 4</Text>
              </View>
           </View>
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
    textSide: {
        marginTop:20,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
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
