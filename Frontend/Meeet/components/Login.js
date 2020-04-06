import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

class Login extends Component {
//  state = {count: 0}

  constructor(props) {
    super(props);
    this.state = {usernameText: '', passwordText:''};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
  this._isMounted = false;
  }

  render() {
    //const {color, size} = this.props

    return (

      <View style = {styles.login}>

        <View style = {styles.loginInput}>

          <Icon
            name="user"
            size={20}
            color='#2c365d'
            />
          <TextInput
            style={styles.textInput}
            textAlign={'center'}
            onChangeText={(text) => this.setState({usernameText: text})}
            value={this.state.usernameText}
            />

          </View>
        <View style = {styles.loginInput}>

          <Icon
            name="key"
            size={20}
            color='#2c365d'
            />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            textAlign={'center'}
            onChangeText={(text) => this.setState({passwordText: text})}
            value={this.state.passwordText}
            />

        </View>

      <View style = {styles.buttons}>

        <TouchableOpacity style={styles.button}>
          <Text style= {{color: '#fbfbfb'}}>
            Login
            </Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style= {{color: '#fbfbfb'}}>
            Signup
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    marginHorizontal: 5,
    backgroundColor: '#cbcbcb',
    height: 40,
    width: 200,
    fontSize: 16,
    borderRadius: 10,
  },
  loginInput:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    flex: 1,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2c365d',
  }
});

export default Login;
