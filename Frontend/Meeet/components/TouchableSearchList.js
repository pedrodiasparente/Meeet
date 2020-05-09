import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import  SearchBar from '../components/SearchBar';


function TouchableSearchList({ data , touchFunction }) {
  const [state, setState] = React.useState({ text: '' , list: data });

  let arrayholder = data;

  function searchFilterFunction(text){
    const newData = arrayholder.filter(item => {
      const itemData = `${item.username.toUpperCase()}
      ${item.username.toUpperCase()}`;

      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
   });
    setState({text: state.text, list: newData });
  };




  return (

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
            onPress={() => touchFunction(item) }>
              <Text>
                {item.username}
              </Text>
            </TouchableOpacity>
         
          )}
          keyExtractor={item => item.id}
          extraData={state}
        />
        </View>
    )
}

const styles = StyleSheet.create({
  list: {
    height: '95%',
    width: '100%',
  },
  itemPress: {
    backgroundColor: '#fefefe',
    padding: 20,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});


export default TouchableSearchList;
