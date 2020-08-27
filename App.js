import { Component } from "react";
import React from 'react';import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Tournament from './src/screens/Tournament';
import Registration from './src/screens/Registration';
import Members from './src/screens/Members';
import Account from './src/screens/Account';
import Discord from './src/screens/Discord';

const Tab = createBottomTabNavigator();

class BottomTab extends Component {
  render(){
    return(
    <Tab.Navigator initialRouteName="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Members') {
              return (
                <Image style={styles.icon} source={require('./assets/icons/members.png')}/>
              );
            } else if (route.name === 'Tournament') {
              return (
                <Image style={styles.icon} source={require('./assets/icons/tournament.png')}/>
              );
            } else if (route.name === 'Home') {
              return (
                <Image style={styles.icon} source={require('./assets/icons/home.png')}  />
              );
            } else if (route.name === 'Discord') {
              return (
                <Image style={styles.icon} source={require('./assets/icons/discord.png')}/>
              );
            } else if (route.name === 'Account') {
              return (
                <Image style={styles.icon} source={require('./assets/icons/account.png')}/>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: '#808285',
          labelStyle:{fontSize: 15,},
          style: {backgroundColor: '#d8d8d8', height: 100, },
          safeAreaInsets: {bottom: 30}
        }}>
        <Tab.Screen name="Members" component={Members} />
        <Tab.Screen name="Tournament" component={Tournament} />
        <Tab.Screen name="Home" component={Home} options={{ title: ''}} />
        <Tab.Screen name="Discord" component={Discord} />
        <Tab.Screen name="Account" component={SignUp} />
    </Tab.Navigator>
    );
  }
}

const Stack = createStackNavigator();

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={BottomTab} />
          <Stack.Screen name="SignUp" component={SignUp} />
          {/* <Stack.Screen name="Tournament" component={Tournament} /> */}
          <Stack.Screen name="Registration" component={Registration} />
          {/* <Stack.Screen name="Members" component={Members} /> */}
          <Stack.Screen name="Account" component={Account} />
          {/* <Stack.Screen name="Discord" component={Discord} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

  icon:{
    margin: 5,
    flex: 1,
    resizeMode: 'contain',
    width: 80,
  },
  
});


export default App;