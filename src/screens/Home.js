import React from 'react';
import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Home extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.feed}>
          <Text style={styles.text}>
            <Text style={styles.title}>
              WELCOME TO 
              {"\n"}
              THE NICS CLUB!
            </Text>
            <Text style={styles.paragraph}>
              {"\n"} 
              Our goal is to share ideas and knowledge with each other as well as to promote an interest in computer science and technology through lectures, exhibits, workshops, field trips, and so much more!
              {"\n"}
              One of the interesting features of our club is 3D printing. We do tech-related projects and host fun tournaments. We are open for anyone to join. Our club consists of students, faculty and staff. If you are interested in learning more about information technology, join our club!
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
    alignItems: 'center',
    justifyContent: 'center', 
  },
  feed:{
    marginTop: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'AvenirNext-Regular',
  },
  title:{
    fontFamily: 'AvenirNext-Bold',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 60,
  },
  paragraph:{
    fontSize: 20,
    lineHeight: 50,
  },
});

export default Home;