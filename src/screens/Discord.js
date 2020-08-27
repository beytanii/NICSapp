import React from 'react';
import { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Alert } from "react-native";

class Discord extends Component {
    render(){
        return (
          <View style={styles.container}>
            <View style={{flex:2, justifyContent: 'center',}}>
                <Image style={styles.logo} source={require('../../assets/logo/discordlogo.png')}/>
            </View>
            <View style={{flex:2, justifyContent: 'center',}}>
                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert('Log in unavailable.') }}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                <Text>Don't have an account in Discord?</Text>
                <Text onPress={() => { Alert.alert('Sign Up unavailable.') }}>
                <Text style={styles.Signup}> Sign up.</Text>
                </Text>
            </Text>
            </View> 
            {/* <View style={{flex:1, justifyContent: 'center',}}>
                <Text style={styles.back}>
                <Text onPress={() => this.props.navigation.navigate("Home")}>
                <Text>GO BACK TO NICS</Text>
                </Text>
                </Text>
            </View> */}
          </View>
        );
    }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#414042',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  logo:{
    flex:1,    
    alignSelf: 'center',
    margin: 10,
    resizeMode: "contain",
    height: 130,
    width: 400,
    position: 'absolute',
    },
  text:{
    fontFamily: 'AvenirNext-Regular',
    color: 'white',
    alignSelf: 'center',
  },
  Signup:{
    color: '#7889C4',
  },
  button: {
    height: 50,
    backgroundColor: '#7889C4',
    borderRadius: 8,
    marginBottom: 10,
    width: 300,
    justifyContent: 'center'
  },  
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  back:{
    fontFamily: 'AvenirNext-Regular',
    color: '#808285',
    fontSize: 25,
  },
});

export default Discord;