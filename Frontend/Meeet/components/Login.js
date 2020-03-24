import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
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
      <TextInput
          style={styles.textInput}
          textAlign={'center'}
          placeholder="Username"
          onChangeText={(text) => this.setState({usernameText: text})}
          value={this.state.usernameText}
        />

      <TextInput
          secureTextEntry={true}
            style={styles.textInput}
            textAlign={'center'}
            placeholder="Password"
            onChangeText={(text) => this.setState({passwordText: text})}
            value={this.state.passwordText}
          />
      <Icon
            name="sign-in-alt"
            size={80}
            color="#3E4EA2"
          />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    height: 40,
    width: 200,
    fontSize: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  login: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Login;
