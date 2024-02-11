import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles, textStyles } from './styles';  // Adjust the path as needed
import { GlobalStateProvider, useGlobalState } from './GlobalStateContext';
import Home from './Home';
import Navegator from './Navegator'


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SlideScreen from './SlideScreen';
// import HomeScreen from './HomeScreen';



export default function App() {

  // const { globalState, updateGlobalState } = useGlobalState();

  return (
    <GlobalStateProvider>



    
    <Navegator />
    </GlobalStateProvider>
  );
}
