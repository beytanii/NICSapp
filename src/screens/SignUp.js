import { Component } from "react";
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert
} from "react-native";

class SignUp extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{flex:3}}>
          <Image source={require("../../assets/logo/NICSlogo.png")} style={styles.nicsLogo}/>
        </View>
        <View style={{flex:2}}>
          <TouchableOpacity
            style={styles.button}
            underlayColor="white"
            onPress={() => this.props.navigation.navigate("Registration")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            <Text>Already have an account?</Text>
            <Text onPress={() => { Alert.alert('Log in unavailable.') }}>
              <Text style={styles.login}> Log in.</Text>
            </Text>
          </Text>
        </View>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  },
  nicsLogo:{
    alignSelf: 'center',
    margin: 10,
    resizeMode: "contain",
    height: 100,
    width: 400,
    position: 'absolute',
    top: 100,
  },
  button: {
    height: 50,
    backgroundColor: '#A8D8F0',
    borderColor: '#A8D8F0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },  
  buttonText: {
    fontSize: 20,
    color: '#111',
    alignSelf: 'center'
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
  },
  login:{
    color: 'green',
  }
});

export default SignUp;