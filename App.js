import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Screens/Homw'
import DailypicScreen from './Screens/dailypic'
import StartMapScreen from './Screens/startmap'
import SpaceCraftScreen from './Screens/spacecraft'
const Stack = createStackNavigator();
export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown:false}}>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="DailypicScreen" component={DailypicScreen}/>
     <Stack.Screen name="StartMapScreen" component={StartMapScreen}/>
      <Stack.Screen name="SpaceCraftScreen" component={SpaceCraftScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
  }
}