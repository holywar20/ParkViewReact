import React, {Component} from 'react';
import { StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { List , Button, Card} from 'react-native-paper';

import ListItemButton from "../components/listitembutton";

export default class Contacts extends Component {
	constructor(props){
		super(props);
		this.state = {
			favData 		: [] , 
			careTeam 	: [] ,
			onCall 		: [] ,
			menuVisible : {
				// A dictionary of true/false values to indicate 'which' menu should be open.
			}
		}

		this.navigation = props.navigation;
	}
	
	userTypeIcons = {
		Doctor  : 'healing',
		Friend  : 'person',
		OnCall  : 'phone-in-talk', 
		default : 'mood'  , 
		favorite : 'grade' , 
	}

	render() {
		return (
			<ScrollView style="styles.mainContainer">
				<List.Section>
					<List.Subheader>On Call</List.Subheader>
					{ this.state.onCall.map ( r => this.renderItem(r) ) }
				</List.Section>

				<List.Section>
					<List.Subheader>Favorites</List.Subheader>
					{ this.state.favData.map ( r => this.renderItem(r) ) }
				</List.Section>

				<List.Section>
					<List.Subheader>Care Team</List.Subheader>
					{ this.state.careTeam.map ( r => this.renderItem(r) ) }
				</List.Section>

				<Card style={styles.logoutContainer }>
					<Button mode="contained">
						Logout
					</Button>
				</Card>

			</ScrollView>
		);
	}

	logoutButtonPress = () => {
		const resetAction = StackActions.reset({ // Navigate to brand new stack, as we are 'authenticated'
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'LogoutScreen' })],
		});

		this.navigation.dispatch(resetAction);
	}

	componentDidMount(){
		this.setState({
			'favData'  : this.getFavorites() , 
			'careTeam' : this.getCareTeam() ,
			'onCall'   : this.getOnCall()
		});
	}
		
	renderItem( data ){
		// Figure out which icons to use. 
		let myIcon = '';

		if( data.favorite ){
			myIcon = this.userTypeIcons['favorite'];
		} else {
			myIcon = this.userTypeIcons['Friend'];
		}

		if( data.relationship[0] != "~")
			data.relationship = "~ " + data.relationship; // Add some spacing for better looks

		return(
			<List.Item key ={data.userKey} 
				description = {data.relationship}
				title={ data.name}
				left= { () => <List.Icon icon={myIcon} /> }
				right={ () => <ListItemButton favorite={ data.favorite } nav={ this.navigation } username={data.name} />}
			>
			</List.Item> 
		);
	}

	getFavorites(){
		favArray = [{ 
			name : 'Abraham Lincoln',
			relationship: 'Primary Care',
			type			: 'Doctor',
			favorite	 	: true,
			userKey : 1
		}, { 
			name : 'Dudette',
			relationship : 'Spouse',
			type			 : 'Freind',
			favorite	 	: true,
			userKey : 2
		}, {
			name : 'Optimus Prime',
			relationship : 'Friend',
			type			 : 'Freind',
			favorite	 	: true,
			userKey : 3
		}];

		return favArray;
	}

	getCareTeam(){
		careTeamArray = [{ 
			name : 'George Washington',
			relationship : 'Addiction Specialist',
			type			 : 'Doctor',
			favorite	 	 : false,
			userKey 		 : 4
		}, { 
			name : 'Thomas Jefferson',
			relationship : 'Psycologist',
			type			 : 'Doctor',
			favorite	 	 : false,
			userKey : 5
		}];

		return careTeamArray;
	}

	getOnCall(){
		onCallArray = [{ 
			name : 'Iron Man',
			relationship : 'EMT',
			type			 : 'OnCall',
			favorite	 	 : false,
			userKey : 6
		}, { 
			name : 'Captain Marvel',
			relationship : 'EMT',
			type			 : 'OnCall',
			favorite	 	 : false,
			userKey : 7
		}];

		return onCallArray;
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	} , 
	logoutContainer : {
		padding: 20, 
		margin: 20
	}
});