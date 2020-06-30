import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'

import AuthContext from '../contexts/AuthContext'


function EventDetails({ data }) {


    const idade = () => {
        const i = data.idadeMinima;
        if (i) {
            return 'Idade minima: ' + i;
        }
        return 'Sem Idade Minima!';
    }   

    function formatDate(string){
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
  }

    return (
    <>

       <View style = {styles.profileInput}>

       
        <Text style = {styles.nomeEvento}>
          "{data.nome}"
        </Text>
        </View>

    <View style = {styles.textBox}>
       <Text style = {styles.text}>
              {data.descricao}
        </Text>

      </View>

    
      <Text style = {styles.textNegrito}>
            {idade()}
        </Text>

        <Text style = {styles.textNegrito}>
            Date: {formatDate(data.dataHora)}
        </Text>

        <Text style = {styles.textNegrito}>
            Hours: {data.dataHora.substring(11,16)}
        </Text>


    </>
    )
}

const styles = StyleSheet.create({
  textNegrito:{
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  profileInput:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBox: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
    height: '20%',
    width: '80%',
    backgroundColor: '#FFFDFD',
  },
  nomeEvento: {
    marginTop: 20,
    fontSize: 25,
    color: '#2c365d',
  },
  text: {
    marginLeft: 5,
  },
  list: {
    height: '68%',
    width: '100%',
  },
});


export default EventDetails;