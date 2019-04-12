import React, {Component} from 'react';
import { Image, Keyboard, Text, View, StyleSheet, ScrollView } from "react-native";
import { Checkbox , Button, TextInput, Card } from 'react-native-paper';
import DataStore from '../config/datastore';
/*
	Color Pallet
	// #3DA143 - Parkview Green

*/ 
export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			logoDisplay : 1,
			username : null,
			password : null,
			checked : true,
			validUsername : false, 
			validPassword : false
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
		<ScrollView>
		<View style ={styles.mainContainer}>
			<View style={styles.welcomeContainer}>
				<Image style={styles.header} source={require('../assetts/parkview.jpg')}></Image>
				<Text>SECRET PRODUCT NAME!</Text>
			</View>
			
			<Card style={styles.cardBox} >
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
						disabled={ !(this.state.password && this.state.username) }
						style={styles.button} 
						mode="contained"
						accessabilityLabel="Login"
						onPress={ () => { this.loginUser() }  }
					>Login</Button>

				</Card.Content>
			</Card>

			{ this.state.logoDisplay && 
			<View style={styles.logoContainer}>
				<Text>An Application By</Text>
				<Image style={ styles.logo } source={require('../assetts/ipc.jpg')}/>
			</View>}
		</View>
		</ScrollView>
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
		DataStore.setKey( 'username' , this.state.username );
		this.navigation.navigate('TabNavigationScreen');
	};
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	},
	welcomeContainer:{
		padding: 10 ,
		alignItems : 'center'
	},
	header : {
		height: 50,
		resizeMode: 'contain',
		alignItems: 'center'
	},
	inputContainer: {
		flex: 1.5,
		justifyContent: 'center',
		padding: 10,
		margin : 10
	},
	logoContainer: {
		flex: 1 ,
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo : {
		height: 50,
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
	}, 
	cardBox: {
		borderRadius: 10, 
		borderColor : '#3DA143',
		borderWidth : 1,
		padding: 5, 
		margin: 5
	}
});