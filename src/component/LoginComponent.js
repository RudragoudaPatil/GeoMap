import React, { Component } from 'react';
import Geolocation from './GeolocationComponent';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ToastAndroid 
} from 'react-native';


import {loginUser} from '../services/service';
const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      message:'User Logged In',
     user:{ email:"", password: '' }
  }

  this.login=this.login.bind(this);
  this.handleChange=this.handleChange.bind(this)
}

static navigationOptions = ({ navigation }) => {
  navigation.title = "LoginComponent"     
}
login(){
  loginUser(this.state.user).then(result=>{
      this.setState({message:'User Logged Successfully',visible:true});
  }).catch(err=>{
      this.setState({message:err.message,visible:true});
  });
  this.props.navigation.navigate('Profile')
}
handleChange(e,fieldName){
  let currentState=this.state;
  currentState.user[fieldName]=e.nativeEvent.text;
  this.setState(currentState);
}

  render() {
    return (
      <View style={styles.container}>
      <Geolocation/>
      <Text>Login</Text>
    

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChange={(e) => {this.handleChange(e,'email')}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChange={(e) => {this.handleChange(e,'password')}}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={this.login}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

        <Toast visible={this.state.visible} message={this.state.message} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#228B22",
  },
  signUpText: {
    color: 'white',
  },
  loginButton:{
    backgroundColor: "#228B22",
  }
});