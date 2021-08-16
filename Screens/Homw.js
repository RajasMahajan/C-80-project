import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground,SafeAreaView,Platform,StatusBar,Image} from 'react-native';
import Constants from 'expo-constants';
import SpaceCraftScreen from './spacecraft';
import StartMapScreen from './startmap';
import DailypicScreen from './dailypic';
export default class HomeScreen extends React.Component{
  render(){
  return (
    <View
    style={{
      flex:1
    }}
    > 
    <SafeAreaView
    style={
      styles.androidsafeareaveiwone
    }
    />
    <ImageBackground
    style={{
      height:497,
      width:320
    }}
    source={require('../assets/space.gif')}
    >
      <Image
      style={{
        width:180,
        height:180,
        alignSelf:'center',
      
      }}
      source={require('../assets/main-icon.png')}
      />
      <View
      style={{
        flex:0.5
      }}
      >
    <Text
    style={{
      marginTop :5,
      color:"white",
      fontWeight:"bold",
      fontSize:24,
      alignSelf:'center',
    }}
    >Home Screen</Text>
    <TouchableOpacity
    style={{
      marginTop :45,
      borderRadius:20,
      alignSelf:'center',
    }}
    onPress={
      ()=>{
        this.props.navigation.navigate("SpaceCraftScreen")
      }
    }
    ><Text
    style={{
      backgroundColor:"yellow",
      fontWeight:"bold",
      fontSize:24,
      color:"black",
    }}
    >Space Crafts</Text>
    <Image
    style={{
      width:50,
      height:80,
      alignSelf:'center',
      right:-140,
      marginTop:-60
    }}
    source={require('../assets/space_crafts.png')}
    />
    </TouchableOpacity>

    
    <TouchableOpacity
    style={{
      marginTop :30,
      borderRadius:20,
  alignSelf:'center',    
  
    }}
    onPress={
      ()=>{
        this.props.navigation.navigate("StartMapScreen")
      }
    }
    ><Text
    style={{
      backgroundColor:"yellow",
      fontWeight:"bold",
      fontSize:24,
      color:"black",
    }}
    >Start map</Text>
    <Image
      style={{ 
        width:50,
        height:80,
        alignSelf:'center',
        right:-110,
        marginTop:-60
      }}
    source={require('../assets/star_map.png')}
    />
    </TouchableOpacity>
    <TouchableOpacity
    style={{
      marginTop :45,
      borderRadius:20,
      alignSelf:'center',
  
    }}
    onPress={
      ()=>{
        this.props.navigation.navigate("DailypicScreen")
      }
    }
    ><Text
    style={{
      backgroundColor:"yellow",
      fontWeight:"bold",
      fontSize:24,
      marginRight:100,
      color:"black"
    }}
    >DailypicScreen</Text>
    
    <Image
      style={{ 
        width:100,
        height:70,
        alignSelf:'center',
        right:-90,
        marginTop:-60
      }}
    source={require('../assets/daily_pictures.png')}
    /></TouchableOpacity>
    </View>
    </ImageBackground>
    
    </View>
  );
  }
  
  
}
const styles = StyleSheet.create({
  androidsafeareaveiwone:{
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0,
  }})