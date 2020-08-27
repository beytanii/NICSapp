import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';


class ItemComponent extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};

	state = {
		isModalVisible: false,
		name: '',
		email: '',
		discord: '',
		program: '',
	};

	hideModal = () => {
		this.setState({isModalVisible: false})
	};

	
	memberInfo = (items) => {
		this.setState({
			isModalVisible: true,
			name : items.firstname + ' ' + items.lastname,
			email : items.email,
			discord : items.discord,
			program : items.program
		});
		this.showModal;
	};
	

	render() {
		return (
			<View>
				{this.props.items.map((item, index) => {
					return (
						<View style={{margin: 1, flex: 1, }} key={index}>
							<TouchableOpacity style={styles.btnItem} onPress={this.memberInfo.bind(this.props.items, item)} >
								<Text style={styles.itemtext}>{item.firstname} {item.lastname}</Text>
							</TouchableOpacity>
							<Modal style={styles.modal} isVisible={this.state.isModalVisible}>
								<View style={{flex: 10, padding: 10,}} key={index}>
									<Text style={styles.label}>Name:</Text>
									<Text style={styles.info}>{this.state.name}</Text>
									<Text style={styles.label}>Email:</Text>
									<Text style={styles.info}>{this.state.email}</Text>
									<Text style={styles.label}>Discord Username:</Text>
									<Text style={styles.info}>{this.state.discord}</Text>	
									<Text style={styles.label}>Program:</Text>
									<Text style={styles.info}>{this.state.program}</Text>
									<Text style={styles.label}>Position:</Text>
									<Text style={styles.info}>Member</Text>						
								</View>
								<TouchableOpacity style={styles.btnModal} onPress={this.hideModal}>
									<Text style={styles.buttonText}>Close</Text>
								</TouchableOpacity>
							</Modal>		
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemsList: {
		flex: 1,
		flexDirection: 'column',
	},
	btnItem:{
		justifyContent: 'center',
		fontSize: 22,
		borderWidth: 1,
		backgroundColor: 'white',
		borderColor: '#dcdcdc',
		borderRadius: 5,
		color: 'black',
		height: 60,
		flexDirection: 'column',
	},
	itemtext: {
		padding: 10,
		fontSize: 25,
		textAlign: 'center',		
	},
	modal: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 80,
		marginBottom: 80,
		marginLeft: 40,
		marginRight: 40,
		padding: 10,
		backgroundColor: 'white',
		alignContent: 'center',
		borderRadius: 5,
	},
	label: {
		padding: 10,
		textAlign: "left",
		fontSize: 20,
		fontFamily: "Avenir-Medium",
	},
	info: {
		padding: 5,
		marginLeft: 30,
		justifyContent: 'center',
		textAlign: 'left',
		fontSize: 24,
		fontFamily: "Avenir-Medium",
		fontWeight: 'bold',
	},
	btnModal: {
		flex: 1,
		flexDirection: 'column-reverse',
		backgroundColor: '#dcdcdc',
		borderRadius: 6,
		height: 30,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignContent: 'center',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 18,
	}
});

export default ItemComponent;