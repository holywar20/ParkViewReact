import React, {Component} from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Button , Card} from "react-native-paper";
import { StackActions, NavigationActions } from 'react-navigation';

export default class CheckIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			username : props.navigation.state.params.username
		}

		this.navigation = props.navigation;
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Card style={styles.welcomeBox}>
					<Text style={styles.headerText}>Hello {this.state.username}!</Text>
					<Text style={styles.headerText}>How are you feeling?</Text>
				</Card>

				<Card style={styles.card}>
					<Card.Content>
						<Button icon="healing" mode="contained" color="#f00"
							uppercase={false}
							style={styles.buttons}
							onPress={ () => { this.helpPress() } }>I Need Help!</Button>
						<Button icon="check-circle" mode="contained"
							uppercase={false}
							style={styles.buttons}
							onPress={ () => { this.checkinPress() } }>Checkin</Button>
						
						<Button 	mode="contained"
									compact={true}
									color="#BEC5C8"
									style={styles.logoutButton}
									onPress={ () => { this.logoutPress() } } >Logout</Button>
					</Card.Content>
				</Card>
			
				<View styles={styles.spacer}></View>
			</View>
		);
	}

	logoutPress(){
		this.navigation.navigate('LogoutScreen' , {} );
	}

	helpPress(){
		console.log('help pressed');
		this.navigation.navigate('HelpScreen' , {}  );
	}

	checkinPress(){
		// TODO : Authentication check
		const resetAction = StackActions.reset({ // Navigate to brand new stack, as we are 'authenticated'
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'ContactsScreen' })],
		});

		this.navigation.dispatch(resetAction);
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	},
	welcomeBox : {
		flex: .5,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		margin: 20
	},
	buttons : {
		padding: 10,
		margin : 10
	},
	logoutButton : {
		padding: 5,
		margin: 30
	},
	spacer:{
		flex: .5,
		padding: 20,
		margin: 20
	}, 
	card: {
		flex: 1,
		padding: 20,
		margin: 20
	}, 
	headerText: {
		fontSize: 20,
		color : "#000",
		justifyContent : 'center',
		alignItems: 'center'
	}
})