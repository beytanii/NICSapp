import React from 'react';
import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';
import { ScrollView } from 'react-native-gesture-handler';

let itemsRef = db.ref('/member');

class Members extends Component {
  state = {
		items: []
	};

	componentDidMount() {
		itemsRef.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			this.setState({ items });
		});
  }
  

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.feed}>
          <ScrollView>
            {this.state.items.length > 0 ? (
              <ItemComponent items={this.state.items}/>
            ) : (
              <Text>No items</Text>
            )}
          </ScrollView>
        </View>
        
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    justifyContent: 'center', 
  },
  feed:{
    marginTop: 30,
    padding: 10,
    justifyContent: 'center',
  },
});

export default Members;