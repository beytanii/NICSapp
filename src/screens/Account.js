import React from 'react';
import { Component } from "react";
import { StyleSheet, View,} from "react-native";

class Account extends Component {
    render(){
        return (
          <View style={styles.container}>
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
});

export default Account;