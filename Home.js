import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles, textStyles } from './styles';  // Adjust the path as needed
import { useGlobalState } from './GlobalStateContext';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SlideScreen from './SlideScreen';
// import HomeScreen from './HomeScreen';



export default function Home() {

  const { globalState, updateGlobalState } = useGlobalState();

  return (



    
    <View style={styles.container}>




      <View style={{height: 30}} />

      <View style={styles.horizontalContainer}>
      <Text style={{...textStyles.titleText, fontSize: 40}}>ourglass</Text>

           
      <Image
          source={require('./logo.png')} // Change the path accordingly
          style={{...styles.logo, height: 80, width: 130, marginLeft: 10}}
        />

</View>
      <View style={{height: 30}} />


      <View style={styles.alarmTimeBox}>
        <Text style={textStyles.mainTimeText}>
          {globalState.number}h 15m
        </Text>
      </View>


      <View style={styles.horizontalContainer}>
        <Image
          source={require('./PFP1.jpg')} // Change the path accordingly
          style={styles.image}
        />
        <View style={styles.friendInfo}>
          <Text style={textStyles.name}>Friend 1:</Text>
          <Text>Screen Time: 8 Hours</Text>
        </View>
      </View>

      <View style={styles.horizontalContainer}>
        <Image
          source={require('./PFP1.jpg')} // Change the path accordingly
          style={styles.image}
        />
        <View style={styles.friendInfo}>
          <Text style={textStyles.name}>Friend 1:</Text>
          <Text>Screen Time: 8 Hours</Text>
        </View>
      </View>

      <View style={styles.horizontalContainer}>
        <Image
          source={require('./PFP1.jpg')} // Change the path accordingly
          style={styles.image}
        />
        <View style={styles.friendInfo}>
          <Text style={textStyles.name}>Friend 1:</Text>
          <Text>Screen Time: 8 Hours</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
