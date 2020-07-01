import { View, StyleSheet,TouchableOpacity, Text, Modal, TextInput} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'



function FirstVoteScreen({ navigation }) {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [topico, setTopico] = React.useState(null);
  const [opcao1, setOpcao1] = React.useState(null);
  const [opcao2, setOpcao2] = React.useState(null);
  const [opcao3, setOpcao3] = React.useState(null);
  const [opcao4, setOpcao4] = React.useState(null);


return (
    <View style = {styles.background}>
        <Title title = {'Vote Options'}/>
    
    <View style = {styles.body}>
        <View style = {styles.buttons}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Vote')}>
            <Text style= {{color: '#fbfbfb'}}>
             Vote 1
              </Text>
            </TouchableOpacity>


          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Vote')}>
            <Text style= {{color: '#fbfbfb'}}>
              Vote 2
              </Text>
            </TouchableOpacity>


          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Vote')}>
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
              multiline
              textAlign={'center'}
              placeholder={'Topico'}
              onChangeText={setTopico}
              value={topico}
          />         

          </View>


          <View style={styles.textSide}>
            <TextInput
              style={{...styles.textInputOptions,marginTop:25}}
              multiline
              textAlign={'center'}
              placeholder={'Opção 1'}
              onChangeText={setOpcao1}
              value={opcao1}
          />        

          <TextInput
              style={{...styles.textInputOptions,marginTop:25}}
              multiline
              textAlign={'center'}
              placeholder={'Opção 2'}
              onChangeText={setOpcao2}
              value={opcao2}
          />      

          </View>

          <View style={styles.textSide}>
            <TextInput
              style={{...styles.textInputOptions,marginTop:10}}
              multiline
              textAlign={'center'}
              placeholder={'Opção 3'}
              onChangeText={setOpcao3}
              value={opcao3}
          />        

          <TextInput
              style={{...styles.textInputOptions,marginTop:10}}
              multiline
              textAlign={'center'}
              placeholder={'Opção 4'}
              onChangeText={setOpcao4}
              value={opcao4}
          />      

          </View>

             
            <TouchableOpacity
               style={{...styles.openButtonFinal,marginTop:40,width:170}}
               onPress={() => {setModalVisible(!modalVisible);}}>
                <Text style={styles.textStyle}>Concluir</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style={{...styles.openButtonFinal,marginTop:20}}
               onPress={() => {setModalVisible(!modalVisible);}}>
                <Text style={styles.textStyle}>Go Back</Text>
              </TouchableOpacity>
           </View>
         </View>
        </Modal>

            <TouchableOpacity style={{...styles.button,marginTop:100}} 
            onPress={() => {setModalVisible(true) }} >
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
    textSide: {
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
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
        padding: 55,
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
        backgroundColor: "#2196F3",
        borderRadius: 10,
        height: 40,
        width: 100,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginTop: -15,
        marginBottom: 40,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
      },
      textInput: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginHorizontal: 5,
        backgroundColor: '#cbcbcb',
        height: 50,
        width: 160,
        borderRadius: 10,
      },
      textInputOptions: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: '#cbcbcb',
        height: 40,
        width: 80,
        borderRadius: 10,
      },
  });

export default FirstVoteScreen;