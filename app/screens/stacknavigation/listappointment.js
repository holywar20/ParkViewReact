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
		title : "Appointments"
	})

	render(){
		return(
			<View>
				Appointments list
			</View>
		);
	}
}