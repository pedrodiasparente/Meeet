import { View, StyleSheet,TouchableOpacity, Text, Modal, TextInput} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'



function FirstVoteScreen() {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [topico, setTopico] = React.useState('');

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


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Make New Votation</Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInput}
              placeholder={'Topico'}
              onChangeText={setTopico}
              value={topico}
          />         

          </View>
              <TouchableOpacity
               style={styles.openButton}
               onPress={() => {}}>
                <Text style={styles.textStyle}>Send Mensage</Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={styles.openButtonFinal}
               onPress={() => {setModalVisible(!modalVisible);}}>
                <Text style={styles.textStyle}>Go Back</Text>
              </TouchableOpacity>
           </View>
         </View>
        </Modal>

            <TouchableOpacity style={{...styles.button,marginTop:100}} onPress={() => {setModalVisible(true) }} >
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
        height: 40,
        width: 140,
        backgroundColor: "#F194FF",
        borderRadius: 20,
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
      },
      textInput: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginHorizontal: 5,
        backgroundColor: '#cbcbcb',
        height: 40,
        width: '70%',
        borderRadius: 10,
      },
  });

export default FirstVoteScreen;