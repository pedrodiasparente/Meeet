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
            color='#ac5b27'
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
            color='#ac5b27'
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
          <Text style= {{color: '#2f2f2f', fontWeight: 'bold'}}>
            Login
            </Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style= {{color: '#2f2f2f', fontWeight: 'bold'}}>
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
    backgroundColor: '#474747',
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
    color: '#ac5b27',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ac5b27',
  }
});

export default Login;
