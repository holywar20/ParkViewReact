import React, {Component} from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, View, Button, StyleSheet} from "react-native";
import { Keyboard } from 'react-native';
/*
	Color Pallet

	Background Blue for forms #28546C
*/ 

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			logoDisplay : 1,
			username : null,
			password : null
		}
		console.log(props);
		this.navigation = props.navigation;
	}

	componentDidMount(){
		this.keyboardUp = Keyboard.addListener(
			'keyboardDidShow' , () => {
				this.setState({ logoDisplay : null });
			}
		)

		this.keyboardDown = Keyboard.addListener(
			'keyboardDidHide' , () => {
				this.setState({ logoDisplay : 1 });
			}
		)
	}

	componentWillUnmount(){
		this.keyboardUp.remove();
		this.keyboardDown.remove();
	}

	render() {
		return ( 
		<View style ={styles.mainContainer}>
			<View style={styles.welcomeContainer}>
				<Text style={styles.welcome}>Welcome</Text>
			</View>
			
			<View style={styles.inputContainer} enabled>
				<Text style={styles.text}>Username</Text>
				<TextInput
					autoComplete={'username'}
					selectionColor={'black'}
					style={styles.input}
					value={this.state.username}
					onChangeText={ (text) => this.setState({username : this.state.username}) }
				></TextInput>
				<Text style={styles.text}>Password</Text>
				<TextInput
					autoComplete={'password'}
					selectionColor={'black'}
					style={styles.input}
					value={this.state.password}
					onChangeText={ (text) => this.setState({password: this.state.password}) }
				></TextInput>
				<Button style={styles.button} title="Login"
					onPress={ () => { this.loginUser() }  }
				>Login</Button>
			</View>

			{ this.state.logoDisplay && 
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assetts/1280pxAvaya.png')}/>
			</View>}
		</View>
		);
	}

	loginUser(){
		console.log("logging in user");
		// TODO - add in an auth check.
		this.navigation.navigate('CheckInScreen', { username : this.state.username } );
	};
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	},
	welcomeContainer:{
		padding: 10 
	},
	welcome:{
		fontSize: 20, 
		color : 'black',
		textAlign: 'center'
	},
	inputContainer: {
		flex: 1.2,
		backgroundColor: '#28546C',
		justifyContent: 'center',
		borderRadius: 10, 
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
		margin : 10
	},
	logoContainer: {
		flex: 1 ,
		alignItems: 'center'
	},
	logo : {
		height: 100,
		width: 300,
		resizeMode : 'contain'
	},
	button : {
		marginRight: 10,
		marginLeft: 10 ,
		marginTop : 20, 
		marginBottom : 20
	},
	text: { 
		color : 'white'
	},
	input : {
		color : 'white'
	}
});