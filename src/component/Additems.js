import React, {Component} from './node_modules/react';
import {TextInput, View,Button,Text} from 'react-native';
import {db} from '../config';

let itemsRef = db.ref('/items')

let addItem=item=>{
    db.ref('/items').push({
        itemInfo:item
      
    })
    }
    export default class Additems extends Component{
        constructor(props){
            super(props);
            this.state={
                itemInfo:'',
                items:[]
            }
            this.handleChange = this.handleChange.bind(this);
            this.Additems = this.Additems.bind(this)

        }
         Additems(){
            addItem(this.state.itemInfo)
            }

        handleChange(e){
                this.setState({itemInfo:e.nativeEvent.text})
        }
        componentDidMount(){
            itemsRef.on('value',snapshot=>{
                let data = snapshot.val();
                let items=Object.values(data);
                this.setState({items})
            })
        }

    render(){
        return(
            <View> 
           
 <TextInput value={this.state.itemInfo}
        style={{height: 40, borderColor: 'red', borderWidth: 1}}
        onChange={this.handleChange}
        value={this.state.text}
      />
<Button
  onPress={this.Additems}
  color="#841584"
  title="Add Items"
/>

    {this.state.items.map(x=>{
        return<Text>
            {x.itemInfo}
        </Text>
    })
}

</View>

        )
    }

}