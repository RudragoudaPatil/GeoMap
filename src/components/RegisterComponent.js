import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
//import db from '../services/config'
import { Icon } from 'react-native-elements';
import {registerUser} from '../services/services';
import GeolocationComponent from '../components/GeolocationComponent';





export default class RegisterComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user:{
            fullName:'',
            email:'',
            password:''
        }
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(e,fieldName){
    let currentState = this.state;
    currentState.user[fieldName] =e.nativeEvent.text;
    this.setState(currentState);
  }

  register(){
    registerUser(this.state.user);
    console.log("I am from register function")

  }

  render() {
    return (
      <View >
        <GeolocationComponent/>
      <Text>REGISTRATION</Text>
        <View style={styles.inputContainer}>
            <Icon
            name='user'
            type='font-awesome'
            />
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChange={(e) => {this.handleChange(e,'fullName')}}/>
        </View>

        <View style={styles.inputContainer}>
            <Icon
            name='envelope'
            type='font-awesome'
            />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChange={(e) => {this.handleChange(e,'email')}}/>
        </View>
        
        <View style={styles.inputContainer}>
            <Icon
            name='key'
            type='font-awesome'
            />
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChange={(e) => {this.handleChange(e,'password')}}/>
        </View>
        
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.register}>
        <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
        
        
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={()=>this.props.navigation.navigate('Profile')}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#00b5ec',
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
  }
});