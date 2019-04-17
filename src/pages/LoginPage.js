import React,{Component} from 'react';
import { View,StyleSheet } from 'react-native'
import LoginComponent from '../components/LoginComponent'


export default class LoginPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <LoginComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#00b5ec',
    }
})