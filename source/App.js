import React from 'react';
import { StyleSheet, Text, View,StatusBar,Dimensions } from 'react-native';
import { colors,parameters } from '../source/styles';
import HomeScreen from '../source/HomeScreen';


const SCREEN_WIDTH=Dimensions.get('window').width

const App=() =>{
  return (
    <View style={styles.container}>
    <HomeScreen/>
    <splashScreen/>
    </View>
  );
}

export default App
const styles= StyleSheet.create({
  container:{
    flex:1
  }
})
