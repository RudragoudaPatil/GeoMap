import React, { Component } from 'react';
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
import {registerUser } from '../services/service';
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


//import {registerUser} from '../services/service' ; 
// export const regsterUser=(data)=>{
// db.ref('/users').push(data),(err)=>{
//   console.log(err);
// }

// }
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      message:'User Created',
      user:{
        fullName: '',
        email   : '',
        password: '',
      }
   
    };
    this.handleChange =  this.handleChange.bind(this);
    this.register =this.register.bind(this);
  }
  handleChange(e,fieldName){
    let currentState = this.state;
    currentState.user[fieldName]=e.nativeEvent.text;
    this.setState(currentState);
  }
  register(){
    registerUser(this.state.user).then(result=>{
      this.setState({message:'User Created Successfully',visible:true});
  }).catch(err=>{
      this.setState({message:err.message,visible:true});
  });
  this.props.navigation.navigate('Login');
}
 

  render() {
    return (
      <View style={styles.container}>
      <Text>REGISTRATION</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChange={(e) => {this.handleChange(e,'fullName')}}/>
        </View>

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

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.register}>
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
  }
});