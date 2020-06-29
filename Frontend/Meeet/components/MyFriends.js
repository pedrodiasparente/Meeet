import React, { Component , useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,Modal,Alert} from 'react-native'

import AuthContext from '../contexts/AuthContext'
import SearchBar from '../components/SearchBar';

function MyFriends({data}) {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [itemAtual, setItemAtual] = React.useState(false);

const { signIn } = React.useContext(AuthContext);

const [state, setState] = React.useState({ text: '' , list: data });

const[listaAtual,setListaAtual] = React.useState(data);


function searchFilterFunction(text){
    const newData = listaAtual.filter(item => {
    const itemData = `${item.username.toUpperCase()}
    ${item.username.toUpperCase()}`;

    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
 });
  setState({text: state.text, list: newData });
};

const deleteItemById = id => () => {
  const filteredData = state.list.filter(item => item.id !== id);
  setState({text: '', list: filteredData });
  setModalVisible(!modalVisible);
  createWarning();
  setListaAtual(filteredData);
}


const createWarning = () => {
  Alert.alert(
    "Removed sucessufly!",
    "",
    [{ text: "OK" }],
    { cancelable: false }
  );
  }


  return (
    <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.userImageModal} source={{uri:itemAtual.image}}/>
            <Text style={styles.modalText}>{itemAtual.username}</Text>
             <TouchableOpacity
               style={styles.openButton}
               onPress={() => {}}>
                <Text style={styles.textStyle}>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={styles.openButton}
               onPress={() => {}}>
                <Text style={styles.textStyle}>Send Mensage</Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={styles.openButton}
               onPress={deleteItemById(itemAtual.id)}>
                <Text style={styles.textStyle}>Remove Friend</Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={styles.openButtonFinal}
               onPress={() => {setModalVisible(!modalVisible);}}>
                <Text style={styles.textStyle}>Go Back</Text>
              </TouchableOpacity>
           </View>
         </View>
        </Modal>

      <View style={styles.list}>
      <SearchBar
        placeholder="Type Here..."
        filter={searchFilterFunction}
        onChangeText={state.text}
        />
      <FlatList
        data={state.list}
        renderItem={({ item }) => (
          <TouchableOpacity 
  
            style={[styles.itemPress, item.selectedClass]}
            onPress={() => {setModalVisible(true);setItemAtual(item);}}>
              <View style={{flexDirection: "row"}}>
              <Image style={styles.userImage} source={{uri:item.image}}/>
              <Text style={styles.text}>
                {item.username}
              </Text>
              </View>
            </TouchableOpacity>
         
          )}
          keyExtractor={item => item.id}
          extraData={state}
        />
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
  profileBox: {
    flex : 1,
    alignItems : 'center',
    backgroundColor:'#ebebeb',
  },
  container:{
    flex:1,
    marginTop:0,
  },
  list: {
    height: '95%',
    width: '100%',
  },
  userImage:{
    height: 40,
    width: 40,
    borderRadius:80,
    backgroundColor: '#fefefe',
    borderColor:"#DCDCDC",
    borderWidth:1.5,
  },
  userImageModal:{
    height: 140,
    width: 140,
    borderRadius:80,
    backgroundColor: '#fefefe',
    borderColor:"#DCDCDC",
    borderWidth:1.5,
  },
  text: {
    marginTop:7,
    marginLeft: 13,
    fontSize:18,
    flex:1,
    fontWeight:'bold'
  },
  itemPress: {
    backgroundColor: '#fefefe',
    padding: 10,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    height: 40,
    width: 140,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3" ,
    marginTop: 10,
  },
  openButtonFinal: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    height: 40,
    width: 90,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3" ,
    marginTop: 30,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
  });



export default MyFriends;