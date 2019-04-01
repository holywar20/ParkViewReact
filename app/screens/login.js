import React, {Component} from 'react';
import { Image, Keyboard, Text, View, StyleSheet} from "react-native";
import { Checkbox , Button, TextInput, Card } from 'react-native-paper';
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
			password : null,
			checked : true
		}

		this.navigation = props.navigation;
	}

	componentDidMount(){ 
		this.keyboardUp = Keyboard.addListener(
			'keyboardDidShow' , () => { // A hack that hides the logo when keyboard is up to keep alignment straight. 
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
				<Text style={styles.welcome}>A ParkView Demo</Text>
			</View>
			
			<Card>
				<Card.Content>

					<TextInput mode="outlined" style={styles.input}
						label="Username"
						value={this.state.username}
						onChangeText={ text => { this.setState( { username : text } ) } }
					></TextInput>

					<TextInput mode="outlined" style={styles.input}
						secureTextEntry={true}
						label="Password"
						value={this.state.password}
						onChangeText={ text => { this.setState( {password : text } ) } }
					></TextInput>

					<View style={styles.rowBox}>
						<Text style={styles.text}>Remember Me</Text>
						<Checkbox 	status={ this.state.checked ? 'checked' : 'unchecked'}
										onPress={ () => {this.toggleCheck() }}/>
					</View>

					<Button 
						style={styles.button} 
						mode="contained"
						accessabilityLabel="Login"
						onPress={ () => { this.loginUser() }  }
					>Login</Button>

				</Card.Content>
			</Card>

			{ this.state.logoDisplay && 
			<View style={styles.logoContainer}>
				<Text></Text>
				<Image style={styles.logo} source={require('../assetts/1280pxAvaya.png')}/>
			</View>}
		</View>
		);
	}

	toggleCheck(){
		if(this.state.checked == true )
			this.setState({ checked : false })
		else
			this.setState({ checked : true })
	}

	loginUser(){
		console.log("logging in user");

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
		flex: 1.5,
		justifyContent: 'center',
		borderRadius: 10, 
		padding: 10,
		margin : 10
	},
	logoContainer: {
		flex: 1 ,
		alignItems: 'center',
		justifyContent: 'center'
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
	rowBox : {
		flexDirection: 'row',
		justifyContent : 'center',
		alignItems : 'center'
	}
});