import React,{Component} from 'react';
import { View,StyleSheet } from 'react-native'
import GeolocationComponent from '../components/ProfileComponent'


export default class GeolocationPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <GeolocationComponent/>
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