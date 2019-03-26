import React, {Component} from 'react';
import { Text, View, Button, StyleSheet } from "react-native";

export default class CheckIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			username : props.username
		}

		this.navigation = props.navigation;
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.welcomeBox}>
					<Text>Welcome {this.state.username}</Text>
				</View>

				<View style={styles.checkinBox}>
					<Button 	color="#f00"
								style={styles.button} 
								title="I need help"></Button>
					<Button 	style={styles.button} 
								title="Checkin"
								onPress={ () => { this.checkinPress() } }
								></Button>
				</View>
			
				<View style={styles.logoutBox}>
					<Button 	color='#28546C'
								style={styles.logoutButton} 
								title="Logout"></Button>
				</View>
			</View>
		);
	}

	checkinPress = () => {
		this.navigation.navigate('ContactsScreen', {} );
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	},
	welcomeBox : {
		flex: 1,
		margin: 10,
		alignItems: 'center'
	},
	checkinBox: {
		flex : 2,
		padding: 10,
		justifyContent: 'space-between'
	},
	button : {
		padding: 10,
		margin : 10
	},
	logoutBox : {
		flex : 1 , 
		margin : 10,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	logoutButton : {
		color: 'red'
	},
	spacer:{
		padding: 20,
		margin: 20
	}
	
})