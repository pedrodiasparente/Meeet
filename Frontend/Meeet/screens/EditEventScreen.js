import { View, StyleSheet} from 'react-native'
import * as React from 'react';

import Title from '../components/Title'
import EditEvent from '../components/EditEvent'
import EventContext from '../contexts/EventContext'

function EditEventScreen({route}) {
  const { evento } = route.params

return (
    <View style = {styles.background}>
        <Title title = {'Edit Event'}/>
        <View style = {styles.body}>
         <EditEvent ev={evento}/>
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


let DATA = {"id":1,"nome":"evento1","dataHora":"2014-01-01T00:00:00","longitude":0,"latitude":0,"tipoEvento":0,"idAdmin":1,"descricao":"é um evento muito giro","idadeMinima":null,"idAdminNavigation":null,"eventoHasRequests":[],"utilizadorEvento":[],"votacao":[]}


export default EditEventScreen;
