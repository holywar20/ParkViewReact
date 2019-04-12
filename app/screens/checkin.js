import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button , Card} from "react-native-paper";
import { StackActions, NavigationActions } from 'react-navigation';
import dataStoreObject from '../config/datastore';
export default class CheckIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			username  : null
		}

		this.navigation = props.navigation;
	}

	render() {
		return (
			<ScrollView>
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
						</Card.Content>
					</Card>
				
					<View styles={styles.spacer}></View>
				</View>
			</ScrollView>
		);
	}

	componentDidMount(){
		this.setState({
			username : dataStoreObject.getKey('username')
		})
	}

	helpPress(){
		console.log('help pressed');
		this.navigation.navigate('HelpScreen' , {}  );
	}

	checkinPress(){
		// TODO : Authentication check
		console.log("Checkin pressed!")
		//this.navigation.dispatch(resetAction);
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
		borderRadius: 10, 
		borderColor : '#3DA143',
		borderWidth : 1,
		padding: 5, 
		margin: 5
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
		borderRadius: 10, 
		borderColor : '#3DA143',
		borderWidth : 1,
		padding: 5, 
		margin: 5
	}, 
	headerText: {
		fontSize: 20,
		color : "#000",
		justifyContent : 'center',
		alignItems: 'center'
	}
})