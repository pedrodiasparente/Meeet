import { View, StyleSheet,TouchableOpacity, Text} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'
import NewVote from '../components/NewVote'


function FirstVoteScreen() {

return (
    <View style = {styles.background}>
        <Title title = {'Vote Options'}/>
    
    <View style = {styles.body}>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button}>
            <Text style= {{color: '#fbfbfb'}}>
             Vote 1
              </Text>
            </TouchableOpacity>


          <TouchableOpacity style={styles.button} >
            <Text style= {{color: '#fbfbfb'}}>
              Vote 2
              </Text>
            </TouchableOpacity>


          <TouchableOpacity style={styles.button} >
            <Text style= {{color: '#fbfbfb'}}>
              Vote 3
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.button,marginTop:100}} onPress={() => navigation.navigate('NewVote')} >
            <Text style= {{color: '#fbfbfb'}}>
              Add Votation
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
        flex : 1,
      },
    buttons: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#2c365d',
      },
  });

export default FirstVoteScreen;