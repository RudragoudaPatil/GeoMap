import React, { Component } from 'react';
import {
  Text,
  View,

} from 'react-native';

export default class Login extends Component {

    render(){
        return(
            <View>
                <LoginComponent navigation={this.props.navigation()}/>
            </View>
        )
    }
}