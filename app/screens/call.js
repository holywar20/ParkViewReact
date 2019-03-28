import React, {Component} from 'react';
import { Text, View , StyleSheet } from "react-native";

export default class Contacts extends Component {
	constructor(props){
		super(props);
		this.state = {
		
		}
		console.log(props);
		this.username = props.navigation.state.params.username;
		this.navigation = props.navigation;
	}
	
	render() {
		return (
			<View styles = "mainContainer">
				<View>
					<Text>
					Call Screen
					</Text>
				</View>
				
				<View>
					<Text>Targeting - { this.username }</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		
	}
})