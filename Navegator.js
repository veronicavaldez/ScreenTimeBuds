import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles, textStyles } from './styles';  // Adjust the path as needed
import { useGlobalState } from './GlobalStateContext';
import Home from './Home';
import {Slide0, Slide1, Slide2, Slide3, Slide4, Slide5} from './Slides'


export default function Navegator() {

  const { globalState, updateGlobalState } = useGlobalState();

  return (
    <>
        {
                globalState.slide === 0 ? 
                (<Slide0 />) :
        globalState.slide === 1 ? 
        (<Slide1 />) :
        globalState.slide === 2 ? 
        (<Slide2 />) :
        globalState.slide === 3 ? 
        (<Slide3 />) :
        globalState.slide === 4 ? 
        (<Slide4 />) :
        globalState.slide === 5 ? 
        (<Slide5 />) :
        (<Home/>)}
    
    </>
  )
};

