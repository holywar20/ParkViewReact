import React, {Component} from 'react';
import { Text, TextInput, View, Button, StyleSheet} from "react-native";
import { NavigationEvents } from 'react-navigation';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
		console.log(props);
	}

	render() {
		const {navigate} = this.props.navigation;
		
		return ( 
		<View style ={styles.mainContainer}>
			<View style={styles.welcome}>
				<Text style={styles.red}>Welcome</Text>
			</View>
			
			<View>
				<Text>Username</Text>
				<TextInput
					autofocus={true}
					clearButtonMode={'while-editing'}
				></TextInput>
				<Text>Password</Text>
				<TextInput></TextInput>
				<Button title="Login"
					onPress={ () => this.props.navigation.navigate('CheckInScreen' , {} ) }
				>Login</Button>
				<Button title="Register"
					onPress={ () => this.props.navigation.navigate('RegisterScreen' , {} ) }
				>Register</Button>
			</View>

			<View>
				<Text>Avaya Image</Text>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	welcomeContainer:{
		flex: 1
	},
	inputContainer: {
		flex: 3
	},
	logoContainer: {
		flex: 1
	},
	red: {
		color : 'red'
	}

});