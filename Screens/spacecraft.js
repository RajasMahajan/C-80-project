import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,FlatList,Image,SafeAreaView,StatusBar,Platform
} from 'react-native';
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
      <View>
        <SafeAreaView
        style={
        styles.androidsafearea}
       />
      
      <View
      style={{borderWidth:1,justifyContent:"center",alignItems:'center',marginBottom:10,elevation:10}}
      >
        <Text>22</Text>
     <Image
     source={{uri:item.agency.image_url}}
     style={{
       width:"100%",height:200,marginTop:15,marginBottom:10
     }}
     />
     <Text
     style={{
       fontWeight:'bold',fontSize:20 }}
     >Name</Text>
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
      </View>
    )
  }
  render(){
  return (
    <View 
    style={{
      flex:1,
    justifyContent:'center',
    alignSelf:'center'

    }}
    >  
<View 
style={{
  flex:0.25
}}>
  <Text>SpaceCraft Screen</Text>
<View
style={{
  flex:0.75,
 
}}
>
  
<FlatList 
keyExtractor={this.keyExtractor}
data={
this.state.aircraft
}
renderItem={
  this.renderItem
}
/>
</View>
</View>
    </View>
  );
  }}
const styles = StyleSheet.create({
androidsafearea:{
marginTop:Platform.OS==='android'? StatusBar.currentHeight:0,
}
  })
