import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,ImageBackground,SafeAreaView,Platform,StatusBar,Image, Linking, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
export default class DailypicScreen extends React.Component{
  getAPOD=()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=xhbZQr1oc6oPVdGLQdWHx2ePmrnUgnnNuSUFkqat").
    then(
      response=> {
        this.setState({
          apod:response.data
        })
      }
    ).catch(
      error=>{
        alert(error.message)
      }
    )
  }
  componentDidMount(){
    this.getAPOD();
  }
  
  constructor(){
    super();
    this.state={
      apod:[]
    }
  }
  render(){
    const url= this.state.apod.url;
    if(Object.keys(this.state.apod).length===0){
      <View
      style={{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
      }}
      >
      <Text>Check your internet connection </Text>
      </View>
    }
  return (
    <View
    style={{
      flex:1
    }}
    >  
       <ImageBackground source={require('../assets/stars.gif')} style={{width:"100%",height:"100%",resizeMode:'cover'}}>
   <Text
   style={{
    
     textAlign:'center',
     fontFamily:'serif',
     fontWeight:'bold',
     fontSize:50,
     color:'white',
   }}
   >Daily Pic</Text>
  <Text  style={{
     marginTop:120,
    textAlign:'center',
    fontFamily:'serif',
    fontWeight:'bold',
    fontSize:30,
    color:'white',
  
  }}>
    Astronomy picture of the day
  </Text>

  <TouchableOpacity 
  onPress={()=> Linking.openURL(this.state.apod.url).catch((err) => console.error("could't load the website"))}>
  
 
  <ScrollView>
 <Image
  source={{uri:url}}
  style={{
    width:"100%",height:300,
    borderRadius:10
  }}
  ></Image>
  <Text>{this.state.apod.title}</Text>
  <Text>{this.state.apod.explanation}</Text>
  </ScrollView>
  </TouchableOpacity>
   </ImageBackground>
    </View>
  );
  }
}