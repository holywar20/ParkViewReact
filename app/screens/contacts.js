import React, {Component} from 'react';
import { StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { List , Button, Card, IconButton} from 'react-native-paper';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import DataStore from "../config/datastore"


export default class Contacts extends Component {
	constructor(props){
		super(props);
		this.state = {
			family 		: [] , 
			careTeam 	: [] ,
			onCall 		: [] ,
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

	executeCall = () => {
		RNImmediatePhoneCall.immediatePhoneCall('0123456789');
	};

	render() {
		return (
			<ScrollView style="styles.mainContainer">
				
				<Card style={styles.boxContainer }>
				<List.Section>
					<List.Subheader>On Call</List.Subheader>
					{ this.state.onCall.map ( r => this.renderItem(r) ) }
				</List.Section>
				</Card>

				<Card style={styles.boxContainer }>
				<List.Section>
					<List.Subheader>Care Team</List.Subheader>
					{ this.state.careTeam.map ( r => this.renderItem(r) ) }
				</List.Section>
				</Card>

				<Card style={styles.boxContainer }>
				<List.Section>
					<List.Subheader>Family</List.Subheader>
					{ this.state.family.map ( r => this.renderItem(r) ) }
				</List.Section>
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
			'family'  		: DataStore.getFamily() , 
			'careTeam' 		: DataStore.getCareTeam() ,
			'onCall'   		: DataStore.getOnCall()
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
				right={ () => <IconButton icon={this.userTypeIcons.OnCall} onPress={this.executeCall}></IconButton>}
			>
			</List.Item> 
		);
	}
}

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center',
	} , 
	boxContainer : {
		padding: 10, 
		margin: 10
	}
});