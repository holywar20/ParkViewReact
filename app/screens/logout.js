import React, {Component} from 'react';
import View from "react-native";

export default class Logout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}

		this.navigation = props.navigation;
	}

	static navigationOptions = ({ navigation }) => ({ 
		headerTitle : null
	});

	render(){
		return(
			<View>
				Logout Screen
			</View>
		);
	}
}