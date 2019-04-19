import React, { Component } from 'react';
import {
  Text,
  View,

} from 'react-native';

export default class RegisterComponent extends Component {

    render(){
        return(
            <View>
                <RegisterComponent navigation={this.props.navigation()}/>
            </View>
        )
    }
}