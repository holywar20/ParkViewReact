import React, {Component} from 'react';
import { View , Text } from "react-native";
import { IconButton } from "react-native-paper";

export default class AddAppointment extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}

		this.navigation = props.navigation;
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title : "New Appointment",
		}
	};

	render(){
		return(
			<View>
				<Text>Add Appointment</Text>
			</View>
		);
	}
}