import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles, textStyles } from './styles';  // Adjust the path as needed



export default function App() {
  return (
    <View style={styles.container}>





      <Text style={{marginTop: 30}}>Open up App.js to start working on your app! Excellent.</Text>

      <View style={styles.alarmTimeBox}>
        <Text style={textStyles.titleText}>
          2 hours 15 minutes
        </Text>
      </View>


      <View style={styles.horizontalContainer}>
        

      </View>
      <StatusBar style="auto" />
    </View>
  );
}
