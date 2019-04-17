import React,{Component} from 'react';
import { View,StyleSheet } from 'react-native'
import RegisterComponent from '../components/RegisterComponent'


export default class RegisterPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <RegisterComponent navigation={this.props.navigation}/>
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