import { Component } from "react";
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { db } from '../config';

let addItem = (studentID, firstname, lastname, email, discord, program) => {
	db.ref('/member').push({
    studentID : studentID,
    firstname : firstname,
    lastname : lastname,
    email : email,
    discord : discord,
    program : program
	});
};

class Registration extends Component {
  state = {
      studentID: '',
      firstname: '',
      lastname: '',
      email: '',
      discord: '',
      program: '',
  };

  handleSubmit = () => {
    addItem(
      this.state.studentID,
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.discord,
      this.state.program,
    );
    Alert.alert('Registration Submitted', 'Log in unavailable.');
    this.props.navigation.navigate("Home");
  };

  render(){
    return (
      <KeyboardAwareScrollView>
      <View style={styles.container}>  
        
        <Text style={styles.cancel} 
          onPress={() => { Alert.alert('Registration cancelled', '', 
            [{text: 'OK', onPress: () => this.props.navigation.navigate("Home")}])}}>
            <Text >Cancel</Text>
        </Text>

        <Text style={styles.text}>Student ID:</Text>
        <TextInput 
          style={styles.itemInput} 
          onChange={e =>{this.setState({studentID: e.nativeEvent.text})}} 
        />
      
        <Text style={styles.text}>First Name:</Text>
        <TextInput 
          style={styles.itemInput} 
          onChange={e =>{this.setState({firstname: e.nativeEvent.text})}} 
        />
        
        <Text style={styles.text}>Last Name:</Text>
        <TextInput 
          style={styles.itemInput} 
          onChange={e =>{this.setState({lastname: e.nativeEvent.text})}} 
        />
      
        <Text style={styles.text}>Email Address:</Text>
        <TextInput 
          style={styles.itemInput} 
          onChange={e =>{this.setState({email: e.nativeEvent.text})}} 
        />

        <Text style={styles.text}>Discord Username:</Text>
        <TextInput 
          style={styles.itemInput} 
          onChange={e =>{this.setState({discord: e.nativeEvent.text})}}
        />

        <Text style={styles.text}>Program:</Text>
        <DropDownPicker
            items={[
              {
                label: 'ITN-General',
                value: 'ITN-General',
              },
              {
                label: 'ITN-Programming',
                value: 'ITN-Programming',
              },
              {
                label: 'ITN-Networking',
                value: 'ITN-Networking',
              },
              {
                label: 'ITN-Information Security',
                value: 'ITN-Information Security',
              },
              {
                label: 'Others ...',
                value: 'Others ...',
              },
            ]}
            containerStyle={{ height: 50,}}
            itemStyle={styles.programText}
            activeLabelStyle={{color: 'blue', fontWeight: 'bold',}}
            labelStyle={styles.programText}
            selectedtLabelStyle={styles.programText}
            onChangeItem={(item) =>
              this.setState({
                program: item.value,
              })
            }
          />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    padding: 20,
  },
  cancel:{
    paddingTop: 20,
    color: 'red',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
  text: {
    padding: 10,
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Avenir-Medium",
  },
  itemInput: {
    alignSelf: 'stretch',
    height: 50,
    padding: 4,
    fontSize: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#dcdcdc',
    borderRadius: 5,
    color: 'black'
  },
  programText:{
    justifyContent: 'flex-start',
    fontSize: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#A8D8F0',
    borderRadius: 6,
    marginBottom: 150,
    marginTop: 50,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default Registration;