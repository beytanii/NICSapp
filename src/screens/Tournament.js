import React from 'react';
import { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text,
  Alert
} from "react-native";

class Tournament extends Component {
  render(){
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../../assets/wallpaper/tournamentwallpaper.png')} style={styles.wallpaper}>
        <View style={{flex:1}}>
          <Image source={require("../../assets/logo/NICSlogo-pixel.png")} style={styles.nicsLogo}/>
        </View>
        <View style={{flex:3, alignItems:'center'}}>
          <View style={styles.posterHolder}>
          </View>
          <View style={styles.registerGame}>
            <TouchableOpacity style={styles.button} onPress={() => { Alert.alert('No tournament available.') }}>
              <Text style={styles.gamebtn}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  wallpaper:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center" 
  },
  nicsLogo:{
    alignSelf: 'center',
    margin: 40,
    resizeMode: "contain",
    height: 100,
    width: 380,
    position: 'absolute',
  },
  posterHolder:{
    width:350,
    height:350,
    backgroundColor: 'white',
  },
  registerGame:{
    alignContent: 'center',
    padding: 50,
  },
  button: {
    height: 50,
    backgroundColor: 'green',
    borderRadius: 8,
    width: 350,
    justifyContent: 'center'
  }, 
  gamebtn:{
    fontFamily: 'AvenirNext-Regular',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Tournament;