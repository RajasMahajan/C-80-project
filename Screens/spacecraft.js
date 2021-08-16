import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,FlatList,Image} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

export default class SpaceCraftScreen extends React.Component{
  constructor(){
    super();
    this.state={
      aircraft:[]
    }
  }
  getData=()=>{
    axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
    .then( Response => {
      this.setState({
        aircraft:Response.data.results
      })
      console.log(Response.data.results)
      }
    )
    .catch(error=>{
      console.log(error.message)
    })
  }
  componentDidMount(){
    this.getData()
  }
  keyExtractor=(item,index)=>index.toString();

  renderItem=({item})=>{
    return(
      <View
      style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}
      >
     <Image
     source={{uri:item.agency.image_url}}
     style={{
       width:"100%",height:200,marginTop:15,marginBottom:10
     }}
     />
     <Text
     style={{
       fontWeight:'bold',fontSize:20 }}
     >{item.name}</Text>
     <Text
     style={{
       color:'#696969'
     }}
     >{item.agency.name}</Text>
     <Text>DESCRIPTION</Text>
     <Text
     style={{
      color:'#A9A9A9A9',marginLeft:10,marginRight:10
     }}
     >{item.agency.description}</Text>
      </View>
    )
  }
  render(){
  return (
    <View 
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}
    >  
<View 
style={{
  flex:0.25
}}>
  <Text>SpaceCraftScreen</Text>
<View
style={{
  flex:0.75
}}
>
<FlatList 
keyExtractor={this.keyExtractor}
data={
this.state.aircraft
}
renderItem={
  this.renderItem()
}
/>
</View>
</View>
    </View>
  );
  }
}