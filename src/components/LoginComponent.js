import React,{Component} from 'react-native';
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
import { Icon } from 'react-native-elements';

export default class LoginComponent extends Component{
    constructor(props){
        super(props);
        state = {
            user:{
            email   : '',
            password: '',
            }
            
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Icon
                    name='user'
                    type='font-awesome'
                    />
                    <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon
                    name='key'
                    type='font-awesome'
                    />
                    <TextInput style={styles.inputs}
                    placeholder="Password"
                    underlineColorAndroid='transparent'
                    />
                </View>
            </View>
        )
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
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
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